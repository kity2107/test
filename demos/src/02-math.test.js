const { sum, multiply, divide } = require('./02-math');

test('agregar 1 + 3  deberia ser 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('esto deberia ser igual a  4', () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});

test('esto deberia dividir', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});
