import joi from "joi";
import { generalFields } from "../middleware/validation.js";

export const message = {
  body: joi.object({
    message: generalFields.message,
  }),
  params: joi.object({
    receiverId: generalFields.id,
  }),
};
export const deleteMessage = {
  params: joi.object({
    id: generalFields.id,
  }),
};
