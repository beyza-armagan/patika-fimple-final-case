import mongoose from "mongoose";
//const jwt = require("jsonwebtoken");

//const bcrypt = require("bcryptjs");

const imageSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
});

export const Image = mongoose.model("Image", imageSchema);
