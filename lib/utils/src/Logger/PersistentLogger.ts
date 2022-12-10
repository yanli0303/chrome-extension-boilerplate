import { LogLevel } from './LogLevel';
import type { LogStorage } from './LogStorage';
import type { Logger } from './Logger';
import { stringify } from './stringify';

export class PersistentLogger implements Logger {
  storage: LogStorage;

  module?: string;

  maxLogs = 2000;

  logLevel = LogLevel.warn;

  storageKey = 'logs';

  copyToConsole = true;

  constructor(storage: LogStorage, module?: string) {
    this.storage = storage;
    this.module = module;
  }

  async getLogs(): Promise<string[][]> {
    const data = await this.storage.get(this.storageKey);
    return data[this.storageKey] || [];
  }

  async addLog(...args: any[]) {
    const message = args.map((it) => stringify(it));
    if (this.module) {
      message.unshift(this.module);
    }
    message.unshift(`${Date.now()}`);

    const logs = await this.getLogs();
    logs.push(message);
    if (logs.length > this.maxLogs) {
      logs.shift();
    }
    await this.storage.set({ [this.storageKey]: logs });
  }

  info(...args: any[]) {
    if (this.logLevel !== LogLevel.info) {
      return;
    }

    if (this.copyToConsole) {
      // eslint-disable-next-line no-console
      console.log(...args);
    }

    this.addLog(...args).catch((e) => console.error('log.info', e, ...args));
  }

  warn(...args: any[]) {
    if (this.logLevel === LogLevel.info) {
      return;
    }

    if (this.copyToConsole) {
      console.warn(...args);
    }

    this.addLog(...args).catch((e) => console.error('log.warn', e, ...args));
  }

  error(...args: any[]) {
    if (this.copyToConsole) {
      console.error(...args);
    }

    this.addLog(...args).catch((e) => console.error('log.error', e, ...args));
  }

  async loadSettingsAsync() {
    const { debug, maxLogs, copyLogsToConsole } = await this.storage.get([
      'debug',
      'maxLogs',
      'copyLogsToConsole',
    ]);

    this.logLevel = debug ? LogLevel.info : LogLevel.warn;
    // change below if you don't want to see logs in console
    this.copyToConsole = [undefined, true].includes(copyLogsToConsole);
    console.warn('log.copyToConsole', this.copyToConsole);
    if (maxLogs) {
      this.maxLogs = maxLogs;
    }
  }

  loadSettings() {
    this.loadSettingsAsync().catch((e) => console.error('log.loadSettings', e));
  }
}
