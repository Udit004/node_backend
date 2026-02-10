import express from "express";
import { createMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/message", createMessage);
router.get("/messages", getMessages);

export default router;
