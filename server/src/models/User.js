const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
  },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  isTeacherRequest: {
    type: String,
  },
});

const User = model("User", UserSchema);

module.exports = User;
