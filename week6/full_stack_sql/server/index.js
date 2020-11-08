const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mysql = require('mysql');
const cors = require('cors')

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_new_password',
  database: 'salesorders'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Database Connection Successful!")
})

app.get('/api/get', (req, res) => {
  const sqlSelect = "SELECT * FROM salesorders.employees";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
})


app.listen(7000, () => {
  console.log("Running on Port 7000")
})