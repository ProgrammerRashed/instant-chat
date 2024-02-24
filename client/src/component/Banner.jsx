"use client";

import React from "react";
import bannerImg from "../../public/banner.json";
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div>
      <div className="flex lg:h-[79vh]  mt-16 md:mt-12 lg:mt-3 items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center">
          <div className="space-y-3 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              Social Chat Application
            </h1>
            <p className="py-3 leading-7 lg:max-w-[620px] text-slate-200 font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              molestias optio hic accusantium nostrum beatae nobis, fugit
              cumque, iure, expedita esse suscipit dolor? Sed esse tenetur,
              fugit vel veritatis nesciunt?30
            </p>

            <div>
              <button className="bg-[#C410A0] border-2 hover:border-2 border-[#c410a0] hover:bg-transparent duration-300 hover:border-[#C410A0] px-7 py-[7px] rounded-full">
                Get Started
              </button>
            </div>
          </div>
          <div className=" hidden md:block lg:block lg:order-2">
            <Lottie alt="banner-image" className="" animationData={bannerImg} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
