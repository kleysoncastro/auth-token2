const User = require("../model/User");

module.exports = {
  async index(req, res) {
    try {
      const { idUser, firstName } = req.body;

      let membro = await User.find(null, "firstName lastName");

      if (membro) {
        return res.status(200).send({ membro });
      }
      if (!membro) {
        res.status(200).send({ erro: "user not fund" });
      }

      return res.status(200);
    } catch (err) {
      res.status(400).send({ erro: "Erro inesperado" });
    }
  }
};
