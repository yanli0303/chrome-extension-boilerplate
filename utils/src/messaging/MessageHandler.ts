import type { RequestMessage, ResponseMessage } from './RuntimeMessage';

type NotificationHandler = () => boolean;
type NotificationWithPayloadHandler = (message: RequestMessage) => boolean;
type AsyncRequestHandler = (
  message: RequestMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: ResponseMessage) => void
) => boolean;
export type RequestHandler =
  | NotificationHandler
  | NotificationWithPayloadHandler
  | AsyncRequestHandler;

type CallbackHandler = () => void;
type AsyncResponseHandler = (
  message: ResponseMessage,
  sender: chrome.runtime.MessageSender
) => void;
export type ResponseHandler = CallbackHandler | AsyncResponseHandler;

export type RequestHandlers = { [key: string]: RequestHandler };
export type ResponseHandlers = { [key: string]: ResponseHandler };
