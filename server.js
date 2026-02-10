import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import messageRoutes from "./routes/messageRoutes.js";

const DB_URL = process.env.DB_URL;

await mongoose.connect(DB_URL);

const app = express();

// Add JSON parsing middleware
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(messageRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

setInterval(() => {}, 1 << 30);
