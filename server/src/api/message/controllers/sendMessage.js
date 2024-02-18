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
      conversation = Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMassage = Message({
      senderId,
      receiverId,
      message,
    });

    if (newMassage) {
      conversation.messages.push(newMassage._id);
    }

    await Promise.all([conversation.save(), newMassage.save()])
    res.status(200).send(newMassage)
  } catch (err) {
    next(err);
  }
};

module.exports = sendMessage;
