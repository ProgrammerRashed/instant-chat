const bcryptjs = require("bcryptjs");
const User = require("../../../models/User");
const verifyToken = require("../../../middlewares/verifyToken");

const getUser = async (req, res, next) => {
  try {
    let activeUserEmail = null;

    verifyToken(req, res, () => {
      activeUserEmail = req.user.email;
      if (!activeUserEmail) {
        return res.status(401).send({ message: "unauthorized access" });
      }

      User.findOne({ email: activeUserEmail }).select("name email image")
        .then(activeUser => {
          if (!activeUser) {
            return res.status(401).send({ message: "unauthorized access" });
          }
          return res.status(200).send({ activeUser });
        })
        
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getUser;
