import userModel from "../../dataBase/models/user.model.js";
import messageModel from "../../dataBase/models/message.model.js";

import { asyncHandler } from "../utils/errorHandilng.js";

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
