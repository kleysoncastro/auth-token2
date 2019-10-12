const express = require("express");
const SessionCasdastro = require("./controller/Sessioncadastro");
const LiderCadastro = require("./controller/LiderCadastro");
const RegisterController = require("./controller/RegisterContoller");
const ListController = require("./controller/ListController");
const auth = require("./middleware/auth");

const routes = express.Router();

routes.post("/cadastro-membro", SessionCasdastro.store);
routes.post("/cadastro-lider", LiderCadastro.store);
routes.post("/register", RegisterController.store);
routes.post("/list", auth, ListController.index);

module.exports = routes;
