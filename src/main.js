const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config({ path: "./.env" });

const { DB_HOST, DB_USER, DB_PASS, DB_SCHEMA } = process.env;

console.log(DB_HOST);
const app = express();

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@membros-stjuc.mongodb.net/${DB_SCHEMA}?retryWrites=true&w=majority`
);

app.use(express.json());
app.use(routes);
app.listen(3333);
