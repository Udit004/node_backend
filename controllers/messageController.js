import Message from "../models/Message.js";

export async function createMessage(req, res) {
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
}

export async function getMessages(req, res) {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).send("Error fetching messages: " + error.message);
  }
}
