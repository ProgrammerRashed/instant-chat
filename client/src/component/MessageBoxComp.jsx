"use client"

import { MessageBox } from "react-chat-elements"

const MessageBoxComp = ({title, text}) => {
  return (
    <div>
       <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={title}
            text={text}
          />
    </div>
  )
}

export default MessageBoxComp
