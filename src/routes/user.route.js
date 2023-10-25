import { Router } from "express";
import validation from "../middleware/validation.js";
import * as validators from "../validators/user.validators.js";
import authentication from "../middleware/authentication.js";
import * as userController from "../controllers/user.js";
const router = Router();

router.put(
  "/",
  validation(validators.userData),
  authentication,
  userController.updateData
);
router.patch(
  "/",
  validation(validators.userPassword),
  authentication,
  userController.updatePassword
);

router.get("/", authentication, userController.userData);

router.get(
  "/:id/profile",
  validation(validators.shareProfile),
  userController.shareProfile
);
export default router;
