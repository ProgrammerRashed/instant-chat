const { model, Schema, default: mongoose } = require("mongoose");

const ConversationSchema = new Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    default: []
  }],
  
}, {timestamps: true});

const Conversation = model("Conversation", ConversationSchema);

module.exports = Conversation;
