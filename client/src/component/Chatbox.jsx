"use client";
import { IoIosCall } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import "react-chat-elements/dist/main.css";
import { BsEmojiSmile } from "react-icons/bs";
import MessageBoxComp from "./MessageBoxComp";
import EmptyChatBox from "./EmptyChatBox";
import useConversation from "@/hooks/useConversation";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import useSendMessage from "@/hooks/useSendMessage";
import Chats from "./Chats";


const ChatBox = () => {
  const { selectedConversation } = useConversation();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();


  const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

  const handleEmojiOpen = () => {
    setOpen(!open);
  };


  const onEmojiClick = (event, emojiObject) => {
    console.log("Emoji Clicked:", emojiObject);
    console.log("Event:", event);
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
  };

  return (
    <div className="z-[999]">
      {selectedConversation ? (
        <div className="bg-[url('https://i.ibb.co/NyZkx2Q/e86c13b0-4e16-4c56-b5b5-1a90acbea77c-naruwhatsappwallpaperdark.webp')] overflow-y-auto  relative h-screen w-full">
          <div className="bg-[#121C22] pl- border-b z-[999] border-slate-700 text-[#a0bcd3] shadow- p-2 flex gap-x-3 justify-between items-center sticky top-0 ">
            <div className="flex items-center gap-3">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={selectedConversation.image}
                alt=""
              />
              <h1 className="text-xl text-white font-semibold">
                {selectedConversation.name}
              </h1>
            </div>

            <div className="flex cursor-pointer gap-3 items-center">
              <div className="h-[40px] w-[40px] rounded-full shadow-lg border-blue-50 bg-slate-800">
                <IoIosCall className="text-white  mx-auto mt-2 text-2xl" />
              </div>
              <div className="h-[40px] w-[40px] rounded-full shadow-lg border-blue-50 bg-slate-800">
                <IoVideocam className="text-white mx-auto mt-[10px] text-xl" />
              </div>
              <div className="h-[40px] w-[40px] rounded-full shadow-lg border-blue-50 bg-slate-800">
                <IoMdInformationCircleOutline className="text-white mx-auto mt-[10px] text-xl" />
              </div>
            </div>
          </div>


          {/* CHATS */}
          <div className="overflow-y-auto px-5 py-3 text-slate-700">
            <Chats/>
          </div>

          <form onSubmit={handleFormSubmit} className="fixed  bottom-0 p-3 w-full bg-[#121C22] shadow-lg flex flex-row gap-2 items-center">
            <div className="flex w-full items-center gap-2">
              <div className="h-[41px] w-[42px] bg-[#0B1114]  rounded-md">
                <label className=" mx-auto rounded-sm" htmlFor="attachment">
                  <FaRegImage className="mt-3 ml- mx-auto text-white text-xl " />
                </label>
                <input
                  className="hidden"
                  type="file"
                  name="attachment"
                  id="attachment"
                />
              </div>

              {/* content */}

              <div className="relative">
                <input
                  type="text"
                  name="textField"
                  placeholder="write message"

                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-sm rounded-lg outline-none block w-[67vw] py-2.5 px-3 bg-[#0B1114] placeholder-gray-400 text-white border border-[#0B1114] focus:outline-0 focus:border-[#3B82F6]"
                />

                <button
                type="button"
                  onClick={handleEmojiOpen}
                  className="absolute cursor-pointer right-3 bottom-2"
                >
                  <BsEmojiSmile className="text-[22px] text-white" />
                </button>
              </div>

              <div>
                <button
                  className="text-white bg-[#0B1114] px-4 py-2.5"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>

          {open && (
            <div className="absolute bottom-16 right-6">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <EmptyChatBox />
        </div>
      )}
    </div>
  );
};

export default ChatBox;
