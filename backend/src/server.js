const express = require("express");
const app = express();
require("./database/db");
const ticketRoutes = require("./routes/ticketRoutes");
const cors = require("cors");

app.use(cors()); // enable CORS for all routes
app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.get("/", (req, res) => {
  // Example: Fetch data from MongoDB
  // const data = await SomeModel.find();
  // res.json(data);
  res.send("Hello World!");
});

app.use(ticketRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
