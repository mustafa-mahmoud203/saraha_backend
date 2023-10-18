import { Router } from "express";
import * as authController from "../controllers/auth.js";
const router = Router();

router.post("/signUp", authController.signUp);

export default router;
