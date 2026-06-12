import jwt from "jsonwebtoken";

export const auth = (options = {}) => {
  return (req, res, next) => {
    try {
      let token;

      const authHeader = req.headers.authorization;

      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }

      if (!token) {
        return res.unauthorized("Authentication required");
      }

      const decoded = jwt.verify(
        token,
        options.secret || process.env.JWT_SECRET,
      );

      req.user = decoded;

      next();
    } catch {
      return res.unauthorized("Invalid or expired token");
    }
  };
};
