import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

await mongoose.connect(DB_URL);


const app = express();

// ✅ CORRECT way
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Didi and Priya from your brother!" + "\n" + "How are you? Hope you are doing well.");
});

app.get("/satyam", (req, res) => {
  res.send("This is the Satyam page.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

setInterval(() => {}, 1 << 30);

