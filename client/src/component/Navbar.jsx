import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          {/* <h1 className="font-semibold text-xl">Logo</h1> */}

          <Image
            height={70}
            width={70}
            alt="logo"
            src={
              "https://i.ibb.co/PMpXR61/spike-email-messenger-chat-2019-05-01-removebg-preview.png"
            }
          />
          <Link href="/login">
            <button className="py-[6px] px-8 rounded-full border-2 hover:border-2 duration-300 hover:bg-[#C410A0] hover:text-white hover:border-[#2C059] border-[#C410A0]">
              Login Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
