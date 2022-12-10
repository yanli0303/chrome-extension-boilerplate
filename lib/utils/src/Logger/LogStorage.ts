export interface LogStorage {
  get(keys?: string | string[]): Promise<Record<string, any>>;
  set(items: Record<string, any>): Promise<void>;
}
