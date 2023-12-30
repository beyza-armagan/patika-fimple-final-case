require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
console.log("MONGODB_URI:", process.env.MONGODB_URI);

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is undefined.");
} else {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB: Connected"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
}
