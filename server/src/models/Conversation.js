const { model, Schema, default: mongoose } = require("mongoose");

const ConversationSchema = new Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    default: []
  }],
  
}, {timestamps: true});

const Conversation = model("Message", Conversation);

module.exports = Conversation;
