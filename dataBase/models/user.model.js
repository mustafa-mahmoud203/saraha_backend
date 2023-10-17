import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: string,
      required: true,
    },
    lastName: {
      type: string,
      required: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);

export default userModel;
