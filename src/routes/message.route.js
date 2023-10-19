import { Router } from "express";
import * as messageController from "../controllers/message.js";
// import validation from "../middleware/validation.js";
// import * as validators from "../validators/auth.validators.js";
const router = Router();

router.post("/:receiverId", messageController.sendMessage);

export default router;
