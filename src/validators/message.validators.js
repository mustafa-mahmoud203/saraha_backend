import joi from "joi";

export const message = {
  body: joi.object({
    message: joi.string().min(6).max(500).required(),
  }),
  params: joi.object({
    receiverId: joi.string().min(24).max(24).required(),
  }),
};
