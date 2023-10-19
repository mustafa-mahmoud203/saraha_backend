import { asyncHandler } from "../utils/errorHandilng.js";
import userModel from "../../dataBase/models/user.model.js";
import { compare, hash } from "../utils/hahsAndCompare.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, age, gender } = req.body;

  const checkUser = await userModel.findOne({ email });

  if (checkUser) {
    return next(new Error("Email Exist"));
  }

  const hashPassswrd = hash(password);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password: hashPassswrd,
    age,
    gender,
  });

  return res.status(201).json({ message: "Done", user });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (user || compare({ password: password, hasedPassword: user.password })) {
  }
});
