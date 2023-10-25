import joi from "joi";

const methodeData = ["body", "params", "headers", "query"];

export const validationFields = {
  firstName: joi.string().min(3).max(15).alphanum().required(),
  lastName: joi.string().min(3).max(15).alphanum().required(),
  id: joi.string().min(24).max(24).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi
    .string()
    .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
    .required(),
  confirmPassword: joi.string().required(),
  newPassword: joi
    .string()
    .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
    .required(),
  age: joi.number().integer().min(15).max(100).required(),
  gender: joi.string().valid("male", "MALE", "female", "FEMALE").required(),

  message: joi.string().min(6).max(500).required(),
};

const validation = (schema) => {
  return (req, res, next) => {
    const validationArr = [];

    methodeData.forEach((key) => {
      if (schema[key]) {
        const validation = schema[key].validate(req[key], {
          abortEarly: false,
        });

        if (validation.error) {
          validationArr.push(validation.error.details);
        }
      }
    });

    if (validationArr.length) {
      return res.json({ message: "Validator error", validationArr });
    } else {
      return next();
    }
  };
};

export default validation;
