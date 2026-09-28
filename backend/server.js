const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();

const PORT = process.env.PORT || 5000;
//Authentication
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Test route
app.get("/", (req, res) => {
  res.send("FAB SERVICES API is running...");
});

// Services API
app.get("/api/services", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Web Development",
      price: 50000
    },
    {
      id: 2,
      name: "Frontend Development",
      price: 30000
    },
    {
      id: 3,
      name: "Website Maintenance",
      price: 20000
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});