-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL, 
  age INT NOT NULL,
  breed VARCHAR NOT NULL,
  favoriteTreat VARCHAR NOT NULL
);

INSERT INTO dogs (name, age, breed, favoriteTreat)
VALUES
  ('Korra', 1, 'Pyrador', 'Old Mother Hubbard Oven-Baked Biscuits'),
  ('Lilo', 1, 'Pitbull/Shepard', 'Blueberries'),
  ('Cupcake', 12, 'Maltese/Bichon', 'Chicken Treats'),
  ('Pocky', 2, 'Doxie/Maltese', 'Turkey Treats'),
  ('Malibu', 2, 'Shizu/Maltese', 'Sweet Potato/Turkey Treats'),
  ('Mia', 1, 'Mini Poodle', 'All Treats');

  DROP TABLE IF EXISTS cars;

  CREATE TABLE cars (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  make VARCHAR NOT NULL,
  model VARCHAR NOT NULL,
  year INT NOT NULL,
  horsepower INT NOT NULL
  );

  INSERT INTO cars (make, model, year, horsepower)
  VALUES
  ('Lexus', 'IS500 F-Sport', 2022, 472),
  ('Jeep', 'Wrangler', 2022, 285),
  ('Brabus', 'Rocket 900' 2022, 900),
  ('Mercedes', 'G-Class', 2022, 577),
  ('Toyota', 'TRD Pro', 2023, 270),
  ('Honda', 'S2000', 2000, 240);
