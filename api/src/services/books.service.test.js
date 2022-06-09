const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

// const MongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

jest.mock('../lib/mongo.lib.js', () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
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
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled(); //  --->>le pregunto si fue llamada la funcion espia
      expect(mockGetAll).toHaveBeenCalledTimes(1); // ---->>le pregunto cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledWith('books', {}); // -->> con q argumentos fue llamado
    });

    test('Deberia retornar un libro con el nombre harry poter', async () => {
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
