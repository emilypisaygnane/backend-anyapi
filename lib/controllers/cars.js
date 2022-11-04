const { Router } = require('express');
const Cars = require('../models/Cars');
const { cars } = require('../car-data');

module.exports = Router()
  .get('/', async (req, res) => {
    const cars = await Cars.getAll();
    const filtered = cars.map(({ id, make, model }) => ({ id, make, model }));
    res.json(filtered);
  })

  .get('/:id', (req, res) => {
    const car = cars.find((car) => car.id === req.params.id);
    res.json(car);
  });
  
