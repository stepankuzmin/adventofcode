const parseRow = row => row.split('\t').map(number => parseInt(number, 10));

const minmax = (numbers) => {
  const [head] = numbers.slice(0, 1);
  const tail = numbers.slice(1);
  return tail.reduce(
    ({ min, max }, number) => {
      const newMin = number < min ? number : min;
      const newMax = number > max ? number : max;
      return { min: newMin, max: newMax };
    },
    { min: head, max: head }
  );
};

const diff = (row) => {
  const { min, max } = minmax(row);
  return max - min;
};

module.exports = input =>
  input
    .split('\n')
    .map(parseRow)
    .reduce((acc, row) => acc + diff(row), 0);
