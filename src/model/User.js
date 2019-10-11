const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  idUser: {
    type: String,
    require: true
  },
  dateRegister: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
