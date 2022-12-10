import type { MessageAddress } from './MessageAddress';
import type { RequestHandler, ResponseHandler } from './MessageHandler';
import { ResponseMessage, isRecipient } from './RuntimeMessage';

export const addRuntimeMessageListener = ({
  to,
  requestHandlers,
  responseHandlers,
  log,
}: {
  to: MessageAddress;
  requestHandlers: Record<string, RequestHandler>;
  responseHandlers: Record<string, ResponseHandler>;
  log: {
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
  };
}) =>
  chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse): boolean => {
      // use log.info to prevent the browser from collecting errors
      log.warn(`${to} received message:`, { ...message, body: '*' });
      if (!isRecipient(message, to)) return false;

      const { from, type } = message;
      const response = message as ResponseMessage;
      if (response.isReply) {
        const handleResponse = responseHandlers[type];
        if (handleResponse) {
          handleResponse({ message: response, sender });
        } else {
          log.error(`[${to}] No handler for response message ${type}`);
        }
        return false;
      }

      const handleRequest = requestHandlers[type];
      if (handleRequest) {
        const reply = (
          status: ResponseMessage['status'],
          body: ResponseMessage['body']
        ) =>
          sendResponse({
            from: to,
            to: from,
            type,
            isReply: true,
            status,
            body,
          });
        const replyOk = (body: ResponseMessage['body']) => reply('ok', body);
        const replyError = (body: ResponseMessage['body']) =>
          reply('error', body);

        return handleRequest({ message, sender, replyOk, replyError });
      }

      if (type !== 'test') {
        log.error(`[${to}] No handler for request message ${type}`);
      }
      return false;
    }
  );
