import { useDataContext } from "@/context/DataContext";
import useConversation from "@/hooks/useConversation";
import { useEffect, useState } from "react";
import { MessageBox } from "react-chat-elements";

const MessageBoxComp = ({ message, replyButton }) => {
  const { selectedConversation } = useConversation();
  const { currentUser } = useDataContext();

  const [isOwnMessage, setIsOwnMessage] = useState(null);
  const [senderAvatar, setSenderAvatar] = useState(null);
  const [senderName, setSenderName] = useState(null)

  useEffect(() => {
    if (currentUser) {
      const isOwnMessage =
        message.senderId == currentUser.id;
      setIsOwnMessage(isOwnMessage);

      const senderAvatar = isOwnMessage
        ? currentUser.image
        : selectedConversation?.image || null;
      setSenderAvatar(senderAvatar);

      const detectSender = isOwnMessage
        ? currentUser.name
        : selectedConversation?.name || null;
      setSenderName(detectSender);
    }
  }, [message, selectedConversation]);

  console.log(message)

  const data = {
    isOwnMessage: isOwnMessage,
    senderId: message.senderId,
    currentUserId: currentUser.id,
  };
  console.log(data);

  return (
    <div className="">
      <MessageBox
        position={isOwnMessage ? "right" : "left"}
        type="text"
        title={senderName}
        text={message.message}
        avatar={senderAvatar}
        date={message.createdAt}
        alt={message.message}
        replyButton={replyButton}
      />
    </div>
  );
};

export default MessageBoxComp;
