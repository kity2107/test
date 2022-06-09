const request = require('supertest');

const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fake');

describe('test para books', () => {
  let app = null;
  let server = null;
  // antes de ejecutar las pruebas de forma global
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  // depues de lanzar las pruebas cierra la aplicacion
  afterAll(async () => {
    await server.close();
  });

  const mockGetAll = jest.fn();

  jest.mock('../src/lib/mongo.lib.js', () =>
    jest.fn().mockImplementation(() => ({
      getAll: mockGetAll,
      create: () => {},
    }))
  );

  describe('test para [GET] /api/v1/books', () => {
    test('deberia devolver una lista de libros', () => {
      // arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // acert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
