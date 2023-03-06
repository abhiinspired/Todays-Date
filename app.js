const express = require("express");
const app = express();

const date = new Date();
const day =
  date.getDate() > 9
    ? date.getDate().toString()
    : "0" + date.getDate().toString();
const year = date.getFullYear();
const month =
  date.getMonth() + 1 > 9
    ? (date.getMonth() + 1).toString()
    : "0" + (date.getMonth() + 1).toString();

app.get("/", (req, res) => {
  return res.send(day + "-" + month + "-" + year);
});

// app.listen(3000);

module.exports = app;
