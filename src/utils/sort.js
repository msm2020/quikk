export const descending = (curr, next, factor) => {
  return curr?.[factor] > next?.[factor] ? -1 : 1;
};
