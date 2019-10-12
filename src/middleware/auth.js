const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // os if sao para validacao simples na esturura do token
  if (!authHeader) {
    return res.status(401).send({ error: "token não aprovado" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "token erro" });
  }

  const [schema, token] = parts;
  // expressao regular
  if (!/Bearer$/i.test(schema)) {
    return res.status(401).send({ error: "token mal formado" });
  }

  jwt.verify(token, process.env.HASH_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: "token invalido" });

    req.userId = decoded.id;

    return next();
  });
};
