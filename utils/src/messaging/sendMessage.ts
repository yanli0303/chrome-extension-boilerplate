import { RetryOptions, retry } from '../retry';
import type { ResponseMessage, RuntimeMessage } from './RuntimeMessage';

export const sendMessageToRuntime = async (
  message: RuntimeMessage
): Promise<ResponseMessage | void> => {
  const response = await chrome.runtime.sendMessage(message);
  return response as ResponseMessage | void;
};

export const sendMessageToTab = async (
  tabId: number,
  message: RuntimeMessage,
  retryOptions?: RetryOptions
) =>
  retry(async () => {
    const response = await chrome.tabs.sendMessage(tabId, message);
    return response as ResponseMessage | void;
  }, retryOptions);
