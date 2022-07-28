import type { RequestHandler } from '@extension/utils';

export const alert: RequestHandler = ({ body }) => {
  window.document.body.innerHTML = body;
  return false;
};
