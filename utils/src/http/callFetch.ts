import { HttpError } from './HttpError';

export const callFetch = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const body = await response.text();
    throw new HttpError(
      `HTTP ${response.status} ${options.method || 'GET'} ${url}`,
      response.status,
      body,
      response.headers
    );
  }
  return response;
};
