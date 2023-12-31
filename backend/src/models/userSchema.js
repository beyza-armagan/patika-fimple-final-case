import mongoose from "mongoose";
//const jwt = require("jsonwebtoken");

//const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
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
  token: {
    type: String,
    required: false,
    // minLength: 8,
  },
});
/* 
userSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt()
  this.password = await b
}) */

export const User = mongoose.model("User", userSchema);
