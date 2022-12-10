import type { RequestHandler, ResponseHandler } from '@localhost/chrome';
import { hello } from './hello';

export const requestHandlers: Record<string, RequestHandler> = {
  hello,
};
export const responseHandlers: Record<string, ResponseHandler> = {};
