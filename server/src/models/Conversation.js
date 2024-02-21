import mongoose from "mongoose";

const { model, Schema } = mongoose;

const ConversationSchema = new Schema({
  participants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  }],
  messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
  }],
}, { timestamps: true });

const Conversation = model("Conversation", ConversationSchema);

export default Conversation;
