import userModel from "../../dataBase/models/user.model.js";
import messageModel from "../../dataBase/models/message.model.js";

import { asyncHandler } from "../utils/errorHandilng.js";

export const messages = asyncHandler(async (req, res, next) => {
  const user = req.user;

  const messageList = await messageModel.find({ receiverId: user.id });
  //   const messageList = await messageModel.find({ receiverId: user.id }).populate("receiverId");

  return res.json({ message: "Done", messageList });
});

export const sendMessage = asyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  const { message } = req.body;
  const user = await userModel.findById(receiverId);
  if (!user) {
    return next(new Error("In-valid Account", { cause: 404 }));
  }
  const messagesending = await messageModel.create({ message, receiverId });
  return res.status(201).json({ message: "Done", data: messagesending });
});

export const deleteMessage = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const message = await messageModel.deleteOne({
    _id: id,
    receiverId: req.user._id,
  });
  return message.deletedCount
    ? res.status(200).json({ message: "Done" })
    : next(new Error("In-valid message id"), { cause: 400 });
});
