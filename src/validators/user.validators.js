import joi from "joi";

export const userData = {
  body: joi
    .object({
      firstName: joi.string().min(3).max(15).alphanum(),
      lastName: joi.string().min(3).max(15).alphanum(),
      age: joi.number().integer().min(15).max(100),
      gender: joi.string().valid("male", "MALE", "female", "FEMALE"),
    })
    .required(),
};
