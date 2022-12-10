export const stringify = (obj: unknown): string => {
  if (!obj) {
    return '';
  }

  if (obj instanceof Error) {
    const { name, message, cause } = obj;
    return [name, message, cause].filter(Boolean).join(',');
  }

  if (obj.constructor === Object) {
    return JSON.stringify(obj);
  }

  return obj.toString();
};
