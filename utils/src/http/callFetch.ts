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

export const fetchJson = async (url: string, options?: RequestInit) => {
  const jsonHeaders: HeadersInit = {
    Accept: 'application/json',
  };

  if (options?.body) {
    jsonHeaders['Content-Type'] = 'application/json;charset=UTF-8';
  }

  const response = await callFetch(url, {
    ...options,
    headers: {
      ...jsonHeaders,
      ...options?.headers,
    },
  });
  return response.json();
};
