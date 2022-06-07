const BooksService = require('./books.service');

// suplantamos los libros q nos devuelve la base de datos
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Poter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib.js', () =>
  jest.fn().mockImplementation(() => MongoLibStub)
);

describe('Test para nuestro booksService', () => {
  //   -----> para cada prueba
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); //  limpia todo los mocks q se hayan hecho antes de cada caso de prueba
  });

  describe('test para getBooks', () => {
    test('Deberia retornar una lista de libros', async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(1);
    });

    test('Deberia retornar un libro con el nombre harry poter', async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toEqual('Harry Poter');
    });
  });
});
