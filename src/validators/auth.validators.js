import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const signUp = {
  body: joi
    .object({
      firstName: generalFields.firstName,
      lastName: generalFields.lastName,
      email: generalFields.email,
      password: generalFields.password,
      confirmPassword: generalFields.confirmPassword.valid(joi.ref("password")),
      age: generalFields.age,
      gender: generalFields.gender,
    })
    .required(),
};
export const login = {
  body: joi.object({
    email: generalFields.email,
    password: generalFields.password,
  }),
};
