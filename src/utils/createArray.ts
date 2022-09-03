export const createArray = (length: number): number[] =>
  new Array(length).fill(null).map((n, ind) => ind);

export default createArray;
