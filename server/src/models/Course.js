const { model, Schema, default: mongoose } = require("mongoose");

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  enrollCount: {
    type: Number,
    required: true,
  },
  isApproved: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Course = model("Course", CourseSchema);

module.exports = Course;
