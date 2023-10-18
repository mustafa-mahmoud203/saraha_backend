import joi from "joi";

export const signUp = {
  body: joi
    .object({
      firstName: joi.string().min(3).max(15).alphanum().required(),
      lastName: joi.string().min(3).max(15).alphanum().required(),
      email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: joi
        .string()
        .pattern(
          new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        )
        .required(),
      confirmPassword: joi.string().valid(joi.ref("password")).required(),
      age: joi.number().integer().min(15).max(100).required(),
      gender: joi.string().valid("male", "MALE", "female", "FEMALE").required(),
    })
    .required(),
};
