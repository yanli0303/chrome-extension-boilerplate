import { fetchJson } from './callFetch';
import { joinUrl } from './joinUrl';

export class HttpClient {
  serverUrl?: string;

  loadServerUrl?: () => Promise<string>;

  async getServerUrl() {
    if (!this.serverUrl && this.loadServerUrl) {
      this.serverUrl = await this.loadServerUrl();
    }

    return this.serverUrl;
  }

  async buildUrl(api: string) {
    const serverUrl = await this.getServerUrl();
    if (!serverUrl) {
      throw new Error('Base Server URL is not set.');
    }

    return joinUrl(serverUrl, api);
  }

  accessToken?: string;

  loadAccessToken?: () => Promise<string>;

  async getAccessToken() {
    if (!this.accessToken && this.loadAccessToken) {
      this.accessToken = await this.loadAccessToken();
    }

    return this.accessToken;
  }

  async isAuthenticated() {
    return !!(await this.getAccessToken());
  }

  // eslint-disable-next-line class-methods-use-this
  makeAuthHeader(value: string): HeadersInit {
    return {
      Authorization: `Bearer ${value}`,
    };
  }

  private async addAuthHeader(options?: RequestInit): Promise<RequestInit> {
    const accessToken = await this.getAccessToken();
    if (!accessToken) {
      throw new Error('Auth Token is not set.');
    }

    return {
      ...options,
      headers: {
        ...this.makeAuthHeader(accessToken),
        ...options?.headers,
      },
    };
  }

  async fetchJson(api: string, auth: boolean = true, options?: RequestInit) {
    const url = await this.buildUrl(api);
    let requestOptions = options;
    if (auth) {
      requestOptions = await this.addAuthHeader(requestOptions);
    }

    return fetchJson(url, requestOptions);
  }

  async postJson(
    api: string,
    body: any,
    auth: boolean = true,
    options?: RequestInit
  ) {
    const postOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    };
    return this.fetchJson(api, auth, postOptions);
  }
}
