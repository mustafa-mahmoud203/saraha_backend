import bcrypt from "bcryptjs";
export const hash = (password) => {
  const hashPassword = bcrypt.hashSync(
    password,
    parseInt(process.env.SULT_ROUND)
  );
  return hashPassword;
};
