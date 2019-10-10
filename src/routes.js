const express = require("express");
const SessionCasdastro = require("./controller/Sessioncadastro", {
  useUnifiedTopology: true,
  useUnifiedTopology: true
});

const routes = express.Router();

routes.post("/cadastro", SessionCasdastro.store);

module.exports = routes;
