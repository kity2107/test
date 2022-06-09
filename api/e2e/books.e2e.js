const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('test para books', () => {
  let app = null;
  let server = null;
  let database = null;

  // antes de ejecutar las pruebas de forma global
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME); // conecto a la base de datos test
    await database.dropDatabase(); // borro la base de datos para poder tirar nuevamente las pruebas
  });

  // depues de lanzar las pruebas cierra la aplicacion
  afterAll(async () => {
    await server.close();
  });

  describe('test para [GET] /api/v1/books', () => {
    test('deberia devolver una lista de libros', async () => {
      // arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'book2',
          year: 1998,
          author: 'nicolas',
        },
        {
          name: 'book1',
          year: 1999,
          author: 'pedro',
        },
      ]);
      console.log(seedData);
      // act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // acert
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
