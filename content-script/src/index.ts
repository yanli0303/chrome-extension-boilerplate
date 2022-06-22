import './index.css';

chrome.runtime.sendMessage({
  type: 'HELLO',
  body: 'hello from content script',
});

console.warn('content script loaded');
