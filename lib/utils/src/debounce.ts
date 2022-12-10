export const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  const cancel = () => {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  };

  const debounced = (...args: any[]) => {
    cancel();
    timerId = setTimeout(() => fn(...args), delay);
  };

  debounced.pending = () => timerId !== undefined;
  debounced.cancel = cancel;
  return debounced;
};
