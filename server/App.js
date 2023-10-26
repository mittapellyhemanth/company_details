const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(cors({}));
app.use(bodyParser.json());

const port = process.env.PORT;
const URL = process.env.DB_URL;
const start = async () => {
  await app.listen(port, () => console.log(`connected to the port ${port}`));
  await mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedToPology: true,
    })
    .then((res) => console.log("connected to db"));
};
start();

module.exports = start;
// To start the server
// use => npm run serve
