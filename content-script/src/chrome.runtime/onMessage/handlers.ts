import type { RequestHandler, ResponseHandler } from '@extension/utils';
import { alert } from './alert';

export const requestHandlers: { [key: string]: RequestHandler } = {
  alert,
};
export const responseHandlers: { [key: string]: ResponseHandler } = {};
