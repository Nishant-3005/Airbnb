const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/properties", propertyRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});