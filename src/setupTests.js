// Remove data-tests in production
export const testAttr = val => {
  return process.env.NODE_ENV === 'production'
    ? {}
    : { 'data-test': val };
};