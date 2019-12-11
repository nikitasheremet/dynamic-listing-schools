const express = require("express");
const cors = require("cors");
let app = express();
const port = 4000;
app.use(cors());
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

app.post("/school/add", (req, res) => {});
app.put("/school/update/:id", (req, res) => {});

app.listen(port, () => console.log(`App listening on port ${port}!`));
