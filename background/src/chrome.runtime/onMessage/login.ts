import type { RequestHandler } from 'utils';

export const login: RequestHandler = ({ body }) => {
  if (typeof body !== 'string' || !body) {
    console.error('[background] login: invalid body', body);
  } else {
    const queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions).then(([tab]) => {
      if (tab && tab.id) {
        chrome.tabs.sendMessage(tab.id, {
          from: 'background',
          to: 'content',
          type: 'alert',
          body: `logged in as ${body}`,
        });
      }
    });
  }
  return false;
};
