const User = require("../model/User");

module.exports = {
  async store(req, res) {
    try {
      const { nameFirst, lastName, idUser } = req.body;

      let user = await User.findOne({ idUser });

      if (user) {
        return res.status(400).send({ erro: "registered user" });
      }

      if (!user) {
        user = await User.create({ idUser, nameFirst, lastName });
      }

      return res.json({ ok: "User successfully registered" });
    } catch (err) {
      res.status(400).send({ erro: "unexpected error, consult administrator" });
    }
  }
};
