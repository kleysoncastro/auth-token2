const express = require("express");
const SessionCasdastro = require("./controller/Sessioncadastro");
const LiderCadastro = require("./controller/LiderCadastro");
const RegisterController = require("./controller/RegisterContoller");

const routes = express.Router();

routes.post("/cadastro-membro", SessionCasdastro.store);
routes.post("/cadastro-lider", LiderCadastro.store);
routes.post("/register", RegisterController.store);

module.exports = routes;
