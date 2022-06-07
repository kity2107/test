const BooksService = require('./books.service');

// suplantamos los libros q nos devuelve la base de datos
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Poter',
  },
];

const mockSpyGetAll = jest.fn();

const MongoLibStub = {
  getAll: mockSpyGetAll,
  create: () => {},
};

jest.mock('../lib/mongo.lib.js', () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockSpyGetAll,
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
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(1);
      expect(mockSpyGetAll).toHaveBeenCalled(); //  ---->>le pregunto si fue llamada la funcion espia
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1); // ---->>le pregunto cuantas veces fue llamado
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {}); // -->> con q argumentos fue llamado
    });

    test('Deberia retornar un libro con el nombre harry poter', async () => {
      mockSpyGetAll.mockResolvedValue([{ _id: 1, name: 'Harry Poter2' }]);
      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toEqual('Harry Poter2');
    });
  });
});
