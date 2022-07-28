export const sleep = (ms: number, message?: string): Promise<void> => {
  if (message) {
    // eslint-disable-next-line no-console
    console.log(`Wait ${ms}ms for ${message}`);
  }

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
