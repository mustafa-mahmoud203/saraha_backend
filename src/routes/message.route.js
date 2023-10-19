import { Router } from "express";
import * as messageController from "../controllers/message.js";
import validation from "../middleware/validation.js";
import * as validators from "../validators/message.validators.js";
const router = Router();

router.post(
  "/message/:receiverId",
  validation(validators.message),
  messageController.sendMessage
);

router.get("/messages",messageController.messages)
export default router;
