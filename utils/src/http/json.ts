import { callFetch } from './callFetch';

export const fetchGetJson = async (
  url: string,
  options?: Omit<RequestInit, 'method'>
) => {
  const response = await callFetch(url, {
    ...options,
    headers: {
      accept: 'application/json',
      ...(options?.headers || {}),
    },
  });
  return response.json();
};

export const fetchPostJson = async (
  url: string,
  body?: any,
  options?: Omit<RequestInit, 'method' | 'body'>
) => {
  const response = await callFetch(url, {
    ...options,
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json;charset=UTF-8',
      ...(options?.headers || {}),
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
