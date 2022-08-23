const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fulName: String,
  email: String,
  password: String,
});

const UserModal = mongoose.model("UserModal", userSchema);

module.exports = UserModal;
