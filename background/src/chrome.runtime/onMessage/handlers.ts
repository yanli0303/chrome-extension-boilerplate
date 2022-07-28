import type { RequestHandler, ResponseHandler } from '@extension/utils';
import { login } from './login';

export const requestHandlers: { [key: string]: RequestHandler } = {
  login,
};

export const responseHandlers: { [key: string]: ResponseHandler } = {};
