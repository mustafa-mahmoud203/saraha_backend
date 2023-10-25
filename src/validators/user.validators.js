import joi from "joi";
import { validationFields } from "../middleware/validation.js";

export const userData = {
  body: joi
    .object({
      firstName: validationFields.firstName,
      lastName: validationFields.lastName,
      age: validationFields.age,
      gender: validationFields.gender,
    })
    .required(),
};

export const userPassword = {
  body: joi
    .object({
      oldPassword: validationFields.password,
      newPassword: validationFields.newPassword.invalid(joi.ref("oldPassword")),
      confirmPassword: validationFields.confirmPassword.valid(
        joi.ref("newPassword")
      ),
    })
    .required(),
};
export const shareProfile = {
  params: joi.object({
    id: validationFields.id,
  }),
};
