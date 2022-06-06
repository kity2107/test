// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastName = 'molina';
  expect(data).toEqual({ name: 'nico', lastName: 'molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy(); // son considerados false
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('cristian').toMatch(/sti/); // se espera q contenga esas letras
});

test('listas o array', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
