import joi from "joi";
import { validationFields } from "../middleware/validation.js";

export const message = {
  body: joi.object({
    message: validationFields.message,
  }),
  params: joi.object({
    receiverId: validationFields.id,
  }),
};
export const deleteMessage = {
  params: joi.object({
    id: validationFields.id,
  }),
};
