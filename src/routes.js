const express = require("express");
const SessionCasdastro = require("./controller/Sessioncadastro");
const LiderCadastro = require("./controller/LiderCadastro");

const routes = express.Router();

routes.post("/cadastro-membro", SessionCasdastro.store);
routes.post("/cadastro-lider", LiderCadastro.store);

module.exports = routes;
