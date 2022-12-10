export interface Logger {
  info: (...data: any[]) => void;
  warn: (...data: any[]) => void;
  error: (...data: any[]) => void;
}
