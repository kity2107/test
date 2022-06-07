const Person = require('./06-person');

describe('Test para ersonas', () => {
  let person;
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('deberia retornar down, bajo de peso', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  test('deberia retornar normal, peso correcto', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
