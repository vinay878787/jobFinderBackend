const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const tokenData = req.headers["authorization"].split(" ")
    console.log("TOKEN DATA ",tokenData);
    const token = tokenData[1];
    console.log("token: ",token);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    const verificationTokenDetails = jwt.verify(token, process.env.SECRET_KEY);
    // res.status(200).json({ message: verificationTokenDetails });
    req.userId = verificationTokenDetails.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid Token" });
  }
};
module.exports = verifyToken;
