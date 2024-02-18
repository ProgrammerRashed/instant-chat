const Conversation = require("../../../models/Conversation");
const Message = require("../../../models/Message");

const sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user.id;

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

    res.status(200).send(newMessage); 
  } catch (err) {
    next(err);
  }
};

module.exports = sendMessage;
