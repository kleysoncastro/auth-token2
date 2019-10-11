const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const LiderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    ref: "users"
  },
  lastName: {
    type: String,
    ref: "users"
  },
  idUser: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  token: {
    type: String
  },
  tokenExp: {
    type: String
  }
});

LiderSchema.pre("save", async function(next) {
  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = mongoose.model("Lideres", LiderSchema);
