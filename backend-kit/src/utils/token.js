import jwt from "jsonwebtoken";

export const generateToken = (
  payload,
  secret = process.env.JWT_SECRET,
  options = {},
) => {
  return jwt.sign(payload, secret, options);
};
