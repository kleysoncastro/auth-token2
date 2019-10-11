const Lider = require("../model/Lideres");

module.exports = {
  async store(req, res) {
    const { lastName, firstName, idUser, password } = req.body;

    try {
      let lider = await Lider.findOne({ idUser });

      if (lider) {
        return res.status(400).send({ erro: "registered user" });
      }

      if (!lider) {
        lider = await Lider.create({ firstName, lastName, idUser, password });
      }

      lider.password = undefined;
      res.status(200).send({ lider });
    } catch (err) {
      res.send({ erro: "unexpected error" });
    }
  }
};
