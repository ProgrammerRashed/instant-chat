import express from "express";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { getMessages } from "../../api/message/controllers/getMessages.js";
import { sendMessage } from "../../api/message/controllers/sendMessage.js";
const router = express.Router();

router.get("/api/messages/:id", verifyToken, getMessages);
router.post("/api/send/:id", verifyToken, sendMessage);

export default router;
