const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
