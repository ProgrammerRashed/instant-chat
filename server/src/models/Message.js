const { model, Schema, default: mongoose } = require("mongoose");

const MessageSchema = new Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
}, {timestamps: true});

const Message = model("Message", MessageSchema);

module.exports = Message;
