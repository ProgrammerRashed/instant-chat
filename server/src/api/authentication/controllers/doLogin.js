import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../models/User.js";

export const doLogin = async (req, res, next) => {
  try {
    const bodyUser = req.body;

    const dbUser = await User.findOne({
      email: bodyUser.email,
    });

    if (!dbUser) {
      res.status(400).json({
        status: 400,
        message: "User Doesn't Exist!!",
      });
      return;
    }
    const validPassword = await bcryptjs.compare(
      bodyUser.password,
      dbUser.password
    );
    if (!validPassword) {
      res.status(400).json({
        status: 400,
        message: "Invalid Login Credentials!!",
      });
      return;
    }

    const user = {
      id: dbUser._id.toString(),
      name:dbUser.name,
      email:dbUser.email,
      image: dbUser.image
    }
    
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "24h",
    });
    console.log(token)
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

