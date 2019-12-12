DROP TABLE IF EXISTS schools CASCADE;

CREATE TABLE schools (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(500),
  about TEXT,
  location VARCHAR(500),
  admission TEXT,
  image_url TEXT
);