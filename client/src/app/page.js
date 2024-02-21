import ChatBox from "@/component/Chatbox";

import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    <div>
      {/* <div className="h-screen w-full px-4 lg:px-16 py-3 text-white bg-[rgba(44,6,89,255)]">
        <Navbar />
        <Banner />
      </div> */}

      <ChatBox />
    </div>
  );
}
