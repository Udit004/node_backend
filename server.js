import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

await mongoose.connect(DB_URL);

const app = express();

// Add JSON parsing middleware
app.use(express.json());

// Define a simple Message schema
const messageSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// ✅ CORRECT way
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Didi and Priya from your brother! How are you? Hope you are doing well.");
});

app.get("/satyam", (req, res) => {
  res.send("This is the Satyam page.");
});

app.get("/priya", (req, res) => {
  res.send("This is the Priya page.");
});

// Route to create a message (POST)
app.post("/message", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).send("Text is required");
    }
    const message = new Message({ text });
    await message.save();
    res.send("Message saved successfully");
  } catch (error) {
    res.status(500).send("Error saving message: " + error.message);
  }
});

// Route to read all messages (GET)
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).send("Error fetching messages: " + error.message);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

setInterval(() => {}, 1 << 30);

