chrome.storage.onChanged.addListener(async (changes, areaName) => {
  console.warn('[chrome.storage.onChanged]', changes, areaName);
});
