const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
let app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.json());
const { Pool } = require("pg");

const pool = new Pool({
  user: "dynalist",
  password: "password",
  host: "localhost",
  database: "dynamic_list"
});

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback)
//   },
// }

app.get("/", (req, res) => {
  pool.query(`SELECT * FROM schools;`).then(result => {
    let rows = result.rows;
    res.status(200).json({ rows });
  });
});

app.post("/school/add", (req, res) => {
  let { name, about, location, admission } = req.body;
  pool
    .query(
      `INSERT INTO schools (name, about, location, admission) VALUES ($1, $2, $3, $4)`,
      [name, about, location, admission]
    )
    .then(() => {
      res.status(200).json({ msg: "success" });
    });
});
app.put("/school/update/:id", (req, res) => {});

app.listen(port, () => console.log(`App listening on port ${port}!`));
