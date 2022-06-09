const request = require('supertest');

const createApp = require('../src/app');

describe('test para Hello endpoint', () => {
  let app = null;
  let server = null;
  // antes de ejecutar las pruebas de forma global
  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  // depues de lanzar las pruebas cierra la aplicacion
  afterAll(async () => {
    await server.close();
  });

  describe('test para [get] /', () => {
    test('deberia retornar Hello word', () =>
      request(app)
        .get('/')
        .expect(200)
        .then(response => {
          expect(response.text).toEqual('Hello World!');
        }));
  });
});
