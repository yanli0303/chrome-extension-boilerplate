import type { RequestHandler, ResponseHandler } from 'utils';

import { login } from './login';
import { logout } from './logout';

export const requestHandlers: { [key: string]: RequestHandler } = {
  login,
  logout,
};
export const responseHandlers: { [key: string]: ResponseHandler } = {};
