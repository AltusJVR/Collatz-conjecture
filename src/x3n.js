import getNumber from './index';

const x3n = async x => {
  n = parseInt(x);
  const startingNumber = parseInt(x);
  if (n === NaN) {
    return 'Not a number';
  } else {
    let calculatedArray = [startingNumber];
    while (n !== 1) {
      if (n % 2 != 0) {
        n = n * 3 + 1;
        calculatedArray = [...calculatedArray, n];
      }
      if (n % 2 === 0) {
        n = n / 2;
        calculatedArray = [...calculatedArray, n];
      }
    }
    let numbers = {};
    return (numbers = { ...numbers, calculatedArray, startingNumber });
  }
};

export { x3n as default };
