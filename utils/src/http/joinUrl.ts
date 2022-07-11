export const joinUrl = (...urls: string[]) =>
  urls.join('/').replace(/\/+/g, '/');
