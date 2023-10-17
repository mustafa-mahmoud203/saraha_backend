import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    message: {
      type: string,
      required: true,
    },
    receiverId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const messageModel = model("Message", messageSchema);

export default messageModel;
