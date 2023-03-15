type listFormatterResponse<T> = {
  rows: Array<T>;
  count: number;
};

export const listFormatter = <T>(input: Array<any>): listFormatterResponse<T> => {
  return {
    rows: input[0],
    count: input[1],
  };
};
