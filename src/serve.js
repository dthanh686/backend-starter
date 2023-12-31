const express = require("express");
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT ?? 8888;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

configViewEngine(app)

app.use('/', webRoutes)

// connection.query(
//   'select * from Users u',
//   function (err, results, fields) {
//   }
// )



app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
