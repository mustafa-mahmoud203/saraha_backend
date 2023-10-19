import userModel from "../../dataBase/models/user.model.js";
import { asyncHandler } from "../utils/errorHandilng.js";

export const userData = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const user = await userModel.findById(id);
  return res.status(200).json({ message: "Done", user });
});
