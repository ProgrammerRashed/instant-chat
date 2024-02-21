"use client";

import { MessageBox } from "react-chat-elements";

const MessageBoxComp = ({
  message,
  title,
  text,
  avatar,
  date,
  alt,
  replyButton,
}) => {
  console.log('this is message', message);
  return (
    <div className=" tex-white">
      <MessageBox
        position={"left"}
        type={"text"}
        title={message.senderId.name}
        text={message.message}
        avatar={avatar}
        date={message.createdAt}
        alt={alt}
        replyButton={replyButton}
      />
    </div>
  );
};

export default MessageBoxComp;
