module.exports = (input) => {
  const numbers = input.split('').map(number => parseInt(number, 10));

  const result = numbers.reduce(
    ({ sum, previousNumber }, currentNumber) => {
      const nextSum = currentNumber === previousNumber ? sum + currentNumber : sum;
      return { sum: nextSum, previousNumber: currentNumber };
    },
    { sum: 0, previousNumber: numbers[numbers.length - 1] }
  );

  return result.sum;
};
