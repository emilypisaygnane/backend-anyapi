const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { dogs } = require('../lib/dog-data');

describe('dog routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('./dogs should return a list of dogs', async () => {
    const res = await request(app).get('/dogs');
    const expected = dogs.map((dog) => {
      return { id: dog.id, name: dog.name };
    });
    expect(res.body).toEqual(expected);
  })

  it('/dogs/:id should return dog details' async () => {
    const res = await request(app).get('/dogs/1');
    const Korra = {
      id: '1',
      name: 'Korra',
      age: 1,
      breed: 'Pyrador',
      favoriteTreat: 'Oven-Baked Biscuits'
    };
    expect(res.body).toEqual(Korra);
  });

  afterAll(() => {
    pool.end();
  });
});
