const express = require("express");
let app = express();
const port = 4000;

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
    let rows = result.rows[0];
    res.status(200).json({ rows });
  });
});
app.post("/school/add", (req, res) => {});
app.put("/school/update/:id", (req, res) => {});

app.listen(port, () => console.log(`App listening on port ${port}!`));
