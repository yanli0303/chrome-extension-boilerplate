import type { RequestHandler } from 'utils';

export const alert: RequestHandler = ({ body }) => {
  // eslint-disable-next-line no-alert
  window.alert(body);
  return false;
};
