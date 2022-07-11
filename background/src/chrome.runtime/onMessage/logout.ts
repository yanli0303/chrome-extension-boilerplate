import type { RequestHandler } from 'utils';

export const logout: RequestHandler = () => {
  const queryOptions = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(queryOptions).then(([tab]) => {
    if (tab && tab.id) {
      chrome.tabs.sendMessage(tab.id, {
        from: 'background',
        to: 'content',
        type: 'alert',
        body: 'logged out',
      });
    }
  });
  return false;
};
