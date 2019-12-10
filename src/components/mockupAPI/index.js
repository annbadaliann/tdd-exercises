const data = { initialValue: 10 };

export const getInitialValue = () => {
  return new Promise(res => setTimeout(res, 1000)).then(() => ({ data }));
};
