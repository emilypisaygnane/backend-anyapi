const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { dogs } = require('../lib/dog-data');
const { cars } = require('../lib/car-data');

describe('dog routes, and car routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/dogs should return a list of dogs', async () => {
    const res = await request(app).get('/dogs');
    const expected = dogs.map((dog) => {
      return { id: dog.id, name: dog.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/dogs/:id should return dog details', async () => {
    const res = await request(app).get('/dogs/1');
    const korra = {
      id: '1',
      name: 'Korra',
      age: 1,
      breed: 'Pyrador',
      favoriteTreat: 'Oven-Baked Biscuits'
    };
    expect(res.body).toEqual(korra);
  });

  it('/cars should return a list of cars', async () => {
    const res = await request(app).get('/cars');
    const expected = cars.map((car) => {
      return { id: car.id, make: car.make, model: car.model };
    });
    expect(res.body).toEqual(expected);
  });

  it('/cars/:id should return car details', async () => {
    const res = await request(app).get('/cars/1');
    const lexus = {
      id: '1',
      make: 'Lexus',
      model: 'IS500 F-Sport',
      year: 2022,
      horsepower: 472
    };
    expect(res.body).toEqual(lexus);
  });

  afterAll(() => {
    pool.end();
  });
});
