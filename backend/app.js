const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const upload = require("./imageUpload");

let app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

var pg = require("pg");
var conString = process.env.DATABASE_URL;
var client = new pg.Client(conString);
client.connect(function(err) {
  if (err) {
    return console.error("error running query", err);
  }
});

const singleUpload = upload.single("image");

app.get("/", (req, res) => {
  client.query(`SELECT * FROM schools`).then(result => {
    let rows = result.rows;
    res.status(200).json({ rows });
  });
});

app.post("/school/add", singleUpload, (req, res) => {
  let { name, about, location, admission } = req.body;
  let imgURL = req.file.location;
  client
    .query(
      `INSERT INTO schools (name, about, location, admission, image_url) VALUES ($1, $2, $3, $4, $5)`,
      [name, about, location, admission, imgURL]
    )
    .then(() => {
      res.status(200).json({ msg: "success add" });
    });
});
app.put("/school/update/:id", singleUpload, (req, res) => {
  let { name, about, location, admission } = req.body;
  let imgURL = req.file ? req.file.location : req.body.image_url;
  client
    .query(
      `UPDATE schools SET name = $1, about = $2, location = $3, admission = $4, image_url = $5 WHERE id = $6`,
      [name, about, location, admission, imgURL, req.params.id]
    )
    .then(() => {
      res.status(200).json({ msg: "success update" });
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
