import mongoose from "mongoose";

const { model, Schema } = mongoose;

const MessageSchema = new Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Message = model("Message", MessageSchema);

export default Message;
