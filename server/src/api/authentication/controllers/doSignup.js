const bcryptjs = require("bcryptjs")
const User = require("../../../models/User");

const doSignup = async (req, res, next) => {
  try {
    const user = req.body;

    const isEmailAllReadyExist = await User.findOne({
      email: user.email,
    });

    if (isEmailAllReadyExist) {
      res.status(400).json({
        status: 400,
        message: "Already Have an Account!!",
      });
      return;
    }

   
    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(user.password, salt);


    const newUser = await User.create({
      name: user.name,
      image: user.image,
      email: user.email,
      password: hashedPass,
    });

    res.status(200).json({
      status: 201,
      success: true,
      message: "User Created Successfully",
      user: newUser,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = doSignup;
