"use client";
import { IoIosCall } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";
import Image from "next/image";

const ChatBox = () => {
  return (
    <div className="z-[999] w-full">
      <div className="bg-[url('https://i.ibb.co/NyZkx2Q/e86c13b0-4e16-4c56-b5b5-1a90acbea77c-naruwhatsappwallpaperdark.webp')] overflow-y-auto  relative h-screen w-full">
      {/* USER NAME HEADER */}
        <div className="bg-[#121C22] pl- border-b z-[999] border-slate-700 text-[#a0bcd3] shadow- p-2 flex gap-x-3 justify-between items-center sticky top-0 ">
          <div className="flex items-center gap-3">
            <Image
            width={50}
            height={50}
              className="w-[50px] h-[50px] rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ne7oVV6Lx9uAnmJDUZrrLcGy8yzo1sXdpQ&usqp=CAU"
              alt="user-image"
            />
            <h1 className="text-xl text-white font-semibold">Polash Ahmed</h1>
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


{/* MESSAGES */}
        <div className="overflow-y-auto px-5 py-3 text-slate-700">
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Hello John How Are Doing"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Hey,Im doing well.. what about you..?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="What are you doing..Jon?"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Im watching TV, And You?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Im laying on the bed."
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="okay talk you later?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Hello John How Are Doing"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Hey,Im doing well.. what about you..?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="What are you doing.?"
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="Im watching TV, And You?"
          />
          <MessageBox
            position={"left"}
            type={"text"}
            replyButton="true"
            title={"Polash Ahmed"}
            text="Im laying on the bed."
          />
          <MessageBox
            position={"right"}
            type={"text"}
            titleColor="#0B1114"
            className=""
            title={"John Doe"}
            text="okay talk you later?"
          />
        </div>

{/* MESSAGE INPUT BUTTON */}
        <form className="fixed w-[75%] bottom-0 p-3 bg-[#121C22] flex justify-center items-center gap-5 overflow-hidden">
        
            <div className="w-[5%] relative flex justify-center items-center">
              <label
                className="rounded-sm"
                htmlFor="attachment"
              >
                <FaRegImage className="mt-2 h-full w-full text-white text-xl " />
              </label>
              <input
                className="absolute hidden"
                type="file"
                name="attachment"
                id="attachment"
              />
            </div>

            {/* content */}

            <div className="w-[80%]">
              <input
                type="text"
                name="textField"
                placeholder="write message"
                className="text-sm w-full rounded-lg outline-none block py-2.5 px-3 bg-[#0B1114] placeholder-gray-400 text-white border border-[#0B1114] focus:outline-0 focus:border-[#3B82F6]"
              />
            </div>

            <div className="w-[10%]">
              <button
                className="text-white bg-[#0B1114] rounded w-full px-4 py-2.5"
                type="submit"
              >
                Send
              </button>
            </div>

        </form>
      </div>
    </div>
  );
};

export default ChatBox;
