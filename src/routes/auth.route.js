import { Router } from "express";
import * as authController from "../controllers/auth.js";
import validation from "../middleware/validation.js";
import * as validators from "../validators/auth.validators.js";
const router = Router();

router.post("/signUp", validation(validators.signUp), authController.signUp);

export default router;
