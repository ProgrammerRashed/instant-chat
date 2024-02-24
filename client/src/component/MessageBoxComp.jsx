"use client";

import { useDataContext } from "@/context/DataContext";
import { MessageBox } from "react-chat-elements";

const MessageBoxComp = ({
  message,
  replyButton,
}) => {
  const { loading, currentUser } = useDataContext();
  const fromMe = message.senderId._id === currentUser.id;

  console.log(currentUser)
 console.log(fromMe)
  return (
    <div className=" tex-white">
      <MessageBox
        position={`${fromMe ? "right" : "left"}`}
        type={"text"}
        title={message.senderId.name}
        text={message.message}
        avatar={`${fromMe ? `${message.senderId.image}` : `${message.receiverId.image}`}`}
        date={message.createdAt}
        alt={message.message}
        replyButton={replyButton}
      />
    </div>
  );
};

export default MessageBoxComp;
