import { useSocketContext } from "@/context/SocketContext";
import useConversation from "@/hooks/useConversation";
import Image from "next/image";

const SidebarFriend = ({ singleSidebarFriend }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === singleSidebarFriend._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(singleSidebarFriend._id);


  return (
    < >
      <button
        key={singleSidebarFriend._id}
        onClick={() => {
          setSelectedConversation(singleSidebarFriend);
        }}
        className={`${isSelected?"bg-slate-800" : "bg-transparent"}`}
      >
        <li className={`hover:bg-slate-800  border-b border-slate-700 rounded-md duration-300 py-3 px-2`}>
          <div className="flex cursor-pointer items-center gap-3">
            <div className="relative">
            {/* Active Status */}
            <div className={`${isOnline ? "bg-green-500" : "bg-gray-500"} absolute rounded-full p-1`}>

            </div>
            <Image
              width={50}
              height={50}
              className="rounded-full"
              src={singleSidebarFriend?.image}
              alt="user image"
              />
              </div>

            <div className="w-[550px] text-left">
              <h1 className="font-medium">{singleSidebarFriend?.name}</h1>
              <p className="text-[13px] text-slate-300">
                Hello Dear, How Are You..?
              </p>
            </div>
            <div className="ml-1">
              <p className="mb-1 text-[14px]">12.55 </p>
              <p className="h-[17px] text-[12px] mx-auto text-center w-[18px] rounded-full bg-blue-700 text-white">
                1
              </p>
            </div>
          </div>
        </li>
      </button>
      {/* {!lastIdx && <div className='divider my-0 py-0 h-1' />} */}
    </>
  );
};
export default SidebarFriend;
