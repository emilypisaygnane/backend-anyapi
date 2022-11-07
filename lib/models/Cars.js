const pool = require('../utils/pool');
module.exports = class Cars {
  constructor(row) {
    this.id = row.id;
    this.make = row.make;
    this.model = row.model;
    this.year = row.year;
    this.horsepower = row.horsepower;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from cars');
    return rows.map((carRow) => new Cars(carRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from cars WHERE id = $1', [id]
    );
    return new Cars(rows[0]);
  }
};
