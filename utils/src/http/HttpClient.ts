import { fetchGetJson, fetchPostJson } from './json';

export interface HttpServer {
  serverUrl: string;
  accessToken: string;
}

export class HttpClient {
  serverUrl?: string;

  accessToken?: string;

  loadServer?: () => Promise<string>;

  loadAccessToken?: () => Promise<string>;

  async isAuthenticated() {
    if (this.accessToken) {
      return true;
    }

    if (this.loadAccessToken) {
      this.accessToken = await this.loadAccessToken();
      return !!this.accessToken;
    }

    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  makeAuthHeader(value: string): HeadersInit {
    return {
      Authorization: `Bearer ${value}`,
    };
  }

  async buildUrl(api: string) {
    if (!this.serverUrl && this.loadServer) {
      this.serverUrl = await this.loadServer();
    }

    if (!this.serverUrl) {
      throw new Error('Base Server URL is not set.');
    }

    return `${this.serverUrl}/${api}`.replace(/\/\//g, '/');
  }

  private async addAuthHeader(
    options?: Omit<RequestInit, 'method'>
  ): Promise<Omit<RequestInit, 'method'>> {
    if (!this.accessToken && this.loadAccessToken) {
      this.accessToken = await this.loadAccessToken();
    }

    if (!this.accessToken) {
      throw new Error('Auth Token is not set.');
    }

    return {
      ...options,
      headers: {
        ...(options?.headers || {}),
        ...this.makeAuthHeader(this.accessToken),
      },
    };
  }

  async getJsonNoAuth(api: string, options?: Omit<RequestInit, 'method'>) {
    const url = await this.buildUrl(api);
    return fetchGetJson(url, options);
  }

  async getJson(api: string, options?: Omit<RequestInit, 'method'>) {
    const getOptions = await this.addAuthHeader(options);
    return this.getJsonNoAuth(api, getOptions);
  }

  async postJsonNoAuth(
    api: string,
    body: any,
    options?: Omit<RequestInit, 'method'>
  ) {
    const url = await this.buildUrl(api);
    return fetchPostJson(url, body, options);
  }

  async postJson(
    api: string,
    body: any,
    options?: Omit<RequestInit, 'method'>
  ) {
    const postOptions = await this.addAuthHeader(options);
    return this.postJsonNoAuth(api, body, postOptions);
  }
}
