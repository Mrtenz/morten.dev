export const toCamelCase = (text: string): string => {
  return text.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
};
