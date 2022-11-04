const pool = require('../utils/pool');
module.exports = class Cars {
  constructor(row) {
    this.id = row.id;
    this.make = row.make;
    this.model = row.model;
    this.year = row.year;
    this.horsepower = row.horsepower;
  }

}