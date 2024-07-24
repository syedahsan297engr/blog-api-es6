import jwt from "jsonwebtoken";

export const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Access Denied! You are not authenticated",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(403).json({
      message: "Token is not valid",
    });
  }
};
