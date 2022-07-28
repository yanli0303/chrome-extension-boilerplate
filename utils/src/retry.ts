import { sleep } from './sleep';

export interface RetryOptions {
  attempts: number;
  interval: number;
  onIntermediateError?: (error: any) => void;
}

export const retry = async <T>(
  task: () => Promise<T>,
  options: RetryOptions = {
    attempts: 3,
    interval: 1000,
  }
): Promise<T> => {
  try {
    return await task();
  } catch (e) {
    if (options.attempts <= 1) {
      throw e;
    }

    if (options.onIntermediateError) {
      options.onIntermediateError(e);
    }

    await sleep(options.interval);
    return retry(task, { ...options, attempts: options.attempts - 1 });
  }
};
