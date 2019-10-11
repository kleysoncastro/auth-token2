const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    required: true
  },
  idUser: {
    type: String,
    unique: true,
    required: true
  },
  dateRegister: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
