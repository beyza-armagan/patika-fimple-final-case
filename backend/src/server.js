import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import mongoose from "mongoose";

const app = express();
// require("./database/db");
// const ticketRoutes = require("./routes/ticketRoutes");
// const authRoutes = require("./routes/authRoutes").default;
import cors from "cors";
// const cors = require("cors");

import ticketRoutes from "./routes/ticketRoutes.js";
import authRoutes from "./routes/authRoutes.js";

console.log("MONGODB_URI:", process.env.MONGODB_URI);

app.use(cors()); // enable CORS for all routes

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is undefined.");
} else {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB: Connected"))
    .catch((err) => console.error("MongoDB connection error:", err.message));
}

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
app.use(ticketRoutes);
app.use("/", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
