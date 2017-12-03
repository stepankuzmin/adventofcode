const solve = require('./index');

test('1122', () => {
  expect(solve('1122')).toBe(3);
});

test('1111', () => {
  expect(solve('1111')).toBe(4);
});

test('1234', () => {
  expect(solve('1234')).toBe(0);
});

test('91212129', () => {
  expect(solve('91212129')).toBe(9);
});
