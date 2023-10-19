import userModel from "../../dataBase/models/user.model.js";
import { asyncHandler } from "../utils/errorHandilng.js";
import { compare, hash } from "../utils/hahsAndCompare.js";

export const userData = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const user = await userModel.findById(id);
  return res.status(200).json({ message: "Done", user });
});

export const updateData = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const data = req.body;

  const user = await userModel.updateOne({ _id: id }, data);
  return res.status(200).json({ message: "Done", user });
});

export const updatePassword = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const { password } = req.body;

  const checkoldPassword = compare({
    password: password,
    hasedPassword: user.password,
  });

  if (checkoldPassword) {
    return next(new Error("this password already used try use new password"));
  }

  const newPassword = hash(password);

  const userUpdate = await userModel.updateOne(
    { _id: user.id },
    { password: newPassword }
  );

  return res.status(200).json({ message: "Done", userUpdate });
});
