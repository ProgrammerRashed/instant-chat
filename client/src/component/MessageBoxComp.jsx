"use client";

import { MessageBox } from "react-chat-elements";

const MessageBoxComp = ({ title, text, avatar,date,alt,replyButton }) => {
  return (
    <div className=" tex-white">
      <MessageBox
        position={"left"}
        type={"text"}       
        title={title}
        text={text}
        avatar={avatar}
        date={date}
        alt={alt}
        replyButton={replyButton}
      />
    </div>
  );
};

export default MessageBoxComp;
