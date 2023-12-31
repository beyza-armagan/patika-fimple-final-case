import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import mongoose from "mongoose";
console.log("MONGODB_URI:", process.env.MONGODB_URI);

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is undefined.");
} else {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB: Connected"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
}

export default {};
