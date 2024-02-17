const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../../../models/User");

const doLogin = async (req, res, next) => {
  try {
    const user = req.body;

    const dbUser = await User.findOne({
      email: user.email,
    });

    if (!dbUser) {
      res.status(400).json({
        status: 400,
        message: "User Doesn't Exist!!",
      });
      return;
    }
    const validPassword = await bcryptjs.compare(
      user.password,
      dbUser.password
    );
    if (!validPassword) {
      res.status(400).json({
        status: 400,
        message: "Invalid Login Credentials!!",
      });
      return;
    }
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "24h",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true, message: "login successful" });
  } catch (err) {
    next(err);
  }
};

module.exports = doLogin;
