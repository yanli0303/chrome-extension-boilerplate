import {
  isRecipient,
  RequestMessage,
  ResponseMessage,
  MessageAddress,
} from './RuntimeMessage';
import type { RequestHandlers, ResponseHandlers } from './MessageHandler';

export const addListener = (
  to: MessageAddress,
  requestHandlers: RequestHandlers,
  responseHandlers: ResponseHandlers
) =>
  chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse): boolean => {
      // console.warn(to, message, sender);
      if (!isRecipient(message, to)) return false;

      const { type } = message;
      const response = message as ResponseMessage;
      if (response.isReply) {
        const handleResponse = responseHandlers[type];
        if (handleResponse) {
          handleResponse(response, sender);
        } else {
          console.error(`[${to}] No handler for response message ${type}`);
        }
        return false;
      }

      const handleRequest = requestHandlers[type];
      if (handleRequest) {
        return handleRequest(message as RequestMessage, sender, sendResponse);
      }

      console.error(`[${to}] No handler for request message ${type}`);
      return false;
    }
  );
