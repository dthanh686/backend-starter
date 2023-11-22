const express = require("express");
const path = require('path')
require('dotenv').config()

const app = express();
const port = process.env.PORT ?? 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
  res.send("Hello World!fafaafafafafafafa");
});

app.get("/shiba", (req, res) => {
  res.render("views.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});