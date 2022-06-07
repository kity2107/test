describe('conjunto', () => {
  beforeAll(() => {
    console.log('beforeAll'); // en casos de pruebas donde se necesita levanta algo antes de...
  });

  afterAll(() => {
    console.log('afterAll'); // cuando termina las pruebas baja los servicio levantados anteriormente...
  });

  beforeEach(() => {
    console.log('------beforeEach'); // corre para cada caso, antes de cada prueba.....
  });

  afterEach(() => {
    console.log('------beforeEach'); // corre para cada caso, corre despues de cada prueba.....
  });

  test('case 1', () => {
    console.log('caso 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('caso 2');
    expect(1 + 3).toBe(4);
  });

  describe('otro conjunto', () => {
    test('case 3', () => {
      console.log('caso 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('caso 4');
      expect(1 + 3).toBe(4);
    });
  });
});
