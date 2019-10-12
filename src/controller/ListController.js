const User = require("../model/User");

module.exports = {
  async index(req, res) {
    const { idUser, firstName } = req.body;

    let membro = await User.find(null, "firstName lastName");

    if (membro) {
      return res.status(200).send({ membro });
    }
    if (!membro) {
      res.status(200).send({ erro: "nao encontrado" });
    }

    return res.status(200);
  }
};
