"use client";
import { FaRegEdit } from "react-icons/fa";
import { FaRegCircleUser, FaRegUser } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import profile from "../../public/profile.png";
import Image from "next/image";
import "./scroll.css";

const Sidebar = () => {
  return (
    <div className="bg-darkBlue scrollStyle w-[388px] h-full fixed overflow-y-auto text-white">
      {/* headers */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex cursor-pointer items-center  gap-2">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ne7oVV6Lx9uAnmJDUZrrLcGy8yzo1sXdpQ&usqp=CAU"
              alt=""
            />
            <h1 className="text-xl font-semibold">John Doe</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-[32px] w-[32px] hover:bg-slate-700 rounded-md">
              <HiOutlineDotsHorizontal className="text-[20px] mx-auto mt-[6px] font-bold" />
            </div>
            <div className="h-[32px] w-[32px] hover:bg-slate-700 rounded-md">
              <FaRegEdit className="text-[19px] mx-auto mt-[6px]" />
            </div>
          </div>
        </div>

        {/* search input field */}
        <div className="my-1">
          <input
            className="w-full rounded-sm px-2 border-b focus:border-b-2 focus:border-green-500 py-[6px] bg-[#26343d] outline-none"
            type="text"
            placeholder="Search or start a new chat"
          />
        </div>
      </div>

      {/* User name box */}

      <div className="mt- px-2">
        <ul className="flex flex-col justify-start mb-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c, i) => (
            <li
              key={i}
              className="hover:bg-slate-800 border-b border-slate-700 rounded-md duration-300 py-3 px-2"
            >
              <div className="flex cursor-pointer items-center gap-3">
                <Image
                  className="w-[50px] h-[50px] rounded-full"
                  src={profile}
                  alt="user"
                />

                <div className="w-[550px]">
                  <h1 className="font-medium">Polash Ahmed</h1>
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
