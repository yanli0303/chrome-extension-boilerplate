import type { RequestMessage, ResponseMessage } from './RuntimeMessage';

export type RequestHandler = (data: {
  message: RequestMessage;
  sender: chrome.runtime.MessageSender;
  replyOk: (responseBody: ResponseMessage['body']) => void;
  replyError: (error: ResponseMessage['body']) => void;
}) => boolean;

type CallbackHandler = () => void;
type AsyncResponseHandler = (data: {
  message: ResponseMessage;
  sender: chrome.runtime.MessageSender;
}) => void;
export type ResponseHandler = CallbackHandler | AsyncResponseHandler;
