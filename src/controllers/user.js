import userModel from "../../dataBase/models/user.model.js";
import { asyncHandler } from "../utils/errorHandilng.js";
import { compare, hash } from "../utils/hahsAndCompare.js";

export const userData = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const user = await userModel.findById(id);
  return res.status(200).json({ message: "Done", user });
});

export const shareProfile = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const user = await userModel
    .findById(id)
    .select("userName firstName lastName gender ang");
  return user
    ? res.status(200).json({ message: "Done", user })
    : next(new Error("In-valid account", { cause: 404 }));
});

export const updateData = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const data = req.body;

  const user = await userModel.updateOne({ _id: id }, data);
  return res.status(200).json({ message: "Done", user });
});

export const updatePassword = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const { oldPassword, newPassword } = req.body;

  const checkOldPassword = compare({
    password: oldPassword,
    hasedPassword: user.password,
  });

  if (!checkOldPassword) {
    return next(new Error("In-valid old password", { cause: 400 }));
  }

  const password = hash(newPassword);

  const userUpdate = await userModel.updateOne(
    { _id: user.id },
    { password: password }
  );

  return res.status(200).json({ message: "Done", userUpdate });
});

export const profilePic = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new Error("file is requred", { cause: 400 }));
  }
  const user = await userModel.findByIdAndUpdate(
    req.user._id,
    { profilePic: req.file.dest },
    { new: true }
  );

  return res.json({ message: "Done", user });
});
