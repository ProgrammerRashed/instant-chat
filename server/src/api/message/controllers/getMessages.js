import Conversation from "../../../models/Conversation.js"

export const getMessages = async (req, res, next) => {
  try {
    const userToChat = req.params.id;
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");

    
    res.status(200).send(conversation.messages)
  } catch (err) {
    next(err);
  }
};

