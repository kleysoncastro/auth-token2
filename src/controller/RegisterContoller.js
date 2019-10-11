const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Lider = require("../model/Lideres");

require("dotenv").config({ path: "../.env" });

module.exports = {
  async store(req, res) {
    // idUser é o _id
    function generateToken(idUser = {}) {
      return jwt.sign(idUser, process.env.HASH_SECRET, { expiresIn: 86400 });
    }

    try {
      const { idUser, password } = req.body;

      let lider = await Lider.findOne({ idUser }).select("+password");

      if (!lider)
        return res.status(400).send({ msg: "Informed user is not lider" });

      if (!(await bcrypt.compare(password, lider.password))) {
        res.status(401).send({ erro: "password is not valid" });
      }
      lider.password = undefined;
      res.status(200).send({ token: generateToken({ id: lider._id }) });
    } catch (err) {
      res.status(400).send({ erro: "unexpected error" });
    }
  }
};
