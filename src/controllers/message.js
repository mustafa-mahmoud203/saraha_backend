import userModel from "../../dataBase/models/user.model.js";
import messageModel from "../../dataBase/models/message.model.js";

import { asyncHandler } from "../utils/errorHandilng.js";
import { jwtVerify } from "../utils/token.js";

export const messages = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  const decoded = jwtVerify(authorization);
  console.log(decoded);

  const user = await userModel.findById(decoded.id);
  if (!user) {
    return next(new Error("Not Register account"));
  }

  const messageList = await messageModel.find();
  //   const messageList = await messageModel.find().populate("receiverId");

  return res.json({ message: "Done", messageList });
});

export const sendMessage = asyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  const { message } = req.body;
  const user = await userModel.findById(receiverId);
  if (!user) {
    return next(new Error("In-valid User-Id", { cause: 404 }));
  }
  const messagesending = await messageModel.create({ message, receiverId });
  return res.status(201).json({ message: "Done", data: messagesending });
});
