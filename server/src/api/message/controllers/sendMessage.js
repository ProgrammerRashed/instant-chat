const Conversation = require("../../../models/Conversation");
const Message = require("../../../models/Message");
const {io} = require("../../../socket/socket.js")
const {testData} = require("../../../socket/socket");
const sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user.id;

    console.log("message", message, "receiverId", receiverId, "senderId", senderId)
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save();

    conversation.messages.push(newMessage._id);
    await conversation.save();
    // SOCKET IO FUNCTIONALITY WILL GO HERE

    console.log("test", testData )
    if (receiverSocketId) {


      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(200).send(newMessage);
  } catch (err) {
    next(err);
  }
};

module.exports = sendMessage;
