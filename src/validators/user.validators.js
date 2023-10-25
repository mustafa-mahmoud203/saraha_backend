import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const userData = {
  body: joi
    .object({
      firstName: generalFields.firstName,
      lastName: generalFields.lastName,
      age: generalFields.age,
      gender: generalFields.gender,
    })
    .required(),
};

export const userPassword = {
  body: joi
    .object({
      oldPassword: generalFields.password,
      newPassword: generalFields.newPassword.invalid(joi.ref("oldPassword")),
      confirmPassword: generalFields.confirmPassword.valid(
        joi.ref("newPassword")
      ),
    })
    .required(),
};
