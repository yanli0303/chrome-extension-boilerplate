export class HttpError extends Error {
  status: number;

  body: string;

  headers?: Headers;

  constructor(
    message: string,
    status: number,
    body: string,
    headers?: Headers
  ) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.body = body;
    this.headers = headers;
  }
}
