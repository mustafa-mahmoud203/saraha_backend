import jwt from "jsonwebtoken";
export const jwtSign = ({ payload = "" } = {}) => {
  const token = jwt.sign(payload, process.env.TOKEN_SIGNTURE, {
    expiresIn: "72h",
  });
  return token;
};
