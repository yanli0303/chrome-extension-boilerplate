const handleMessage = (
  request: any,
  _: any,
  sendResponse: (message: object) => void
): void => {
  const { type, body } = request;
  console.warn(`[background service worker] received message: ${type}`, body);
  sendResponse({ type, body });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.warn('chrome.runtime.onMessage');
  handleMessage(request, sender, sendResponse);
});

chrome.runtime.onInstalled.addListener(() => {
  console.warn('chrome.runtime.onInstalled');
});
