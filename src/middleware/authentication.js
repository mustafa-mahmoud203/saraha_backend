import userModel from "../../dataBase/models/user.model.js";
import { asyncHandler } from "../utils/errorHandilng.js";
import { jwtVerify } from "../utils/token.js";

const authentication = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization?.startsWith(process.env.BERAR_KEY)) {
    return next(new Error("In-valid Berar Key"));
  }

  const token = authorization.split(" ")[1];

  const tokenData = jwtVerify(token);

  if (!tokenData?.id) {
    return next(new Error("in-valid token payload"));
  }

  const authUser = await userModel
    .findById(tokenData.id)
    .select(" id firstName lastName email password ");

  if (!authUser) {
    return next(new Error("Not Register account"));
  }
  req.user = authUser;
  return next();
});

export default authentication;
