var pg = require("pg");
var conString =
  "postgres://odstncpk:F4oPVdjM-wWnc5X8g-FbtxRHR5-8Hznh@rajje.db.elephantsql.com:5432/odstncpk"; //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query(`DROP TABLE IF EXISTS schools CASCADE`, function(err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("table dropped");
    // >> output: 2018-08-23T14:02:57.117Z
  });
  client.query(
    `CREATE TABLE schools (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(500),
    about TEXT,
    location VARCHAR(500),
    admission TEXT,
    image_url TEXT
  )`,
    function(err, result) {
      if (err) {
        return console.error("error running query", err);
      }
      console.log("table created");
      // >> output: 2018-08-23T14:02:57.117Z
    }
  );
});

// client.query(`DROP TABLE IF EXISTS schools CASCADE;`);

client.query(`CREATE TABLE schools (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(500),
    about TEXT,
    location VARCHAR(500),
    admission TEXT,
    image_url TEXT
  );`);
