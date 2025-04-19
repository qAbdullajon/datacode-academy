import React from "react";
import Image from "../../assets/about.jpg";
import AboutImg from "../../assets/about-s.png";
import Star from "../../assets/star.png";

export default function About() {
  return (
    <div className="container grid md:grid-cols-2 gap-4 md:gap-x-9 md:gap-y-6 lg:gap-x-8 lg:gap-0 xl:gap-y-6 xl:gap-x-12">
      <div className="w-full relative lg:row-span-2">
        <img
          className="hidden xl:block absolute top-0 left-0 z-10"
          src={AboutImg}
          alt="as"
        />
        <img
          src={Image}
          alt="img"
          className="w-[300px] h-[300px] md:w-full md:h-full lg:max-w-[505px] lg:h-[500px] ml-auto mr-0 object-cover rounded-[24px]"
        />
      </div>

      <div className="w-full">
        <h3 className="font-semibold text-xl lg:text-[40px] pb-2 lg:pb-0 xl:pb-6 leading-[150%]">
          Biz haqimizda
        </h3>
        <p className="text-base xl:text-lg text-[#4D4D4D] leading-[150%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="grid w-full max-w-[551px] grid-cols-2 md:grid-cols-3 md:col-span-2 mx-auto grid-rows-2 gap-y-6 lg:gap-0 gap-x-[15px] lg:col-start-2 lg:col-end-3 xl:mx-0">
        <div>
          <h3 className="font-semibold text-[32px] lg:text-[40px] leading-[150%]">
            10+
          </h3>
          <p className="text-base md:text-lg text-[#4D4D4D]">Bepul darslar</p>
        </div>
        <div className="hidden md:flex row-start-1 row-end-3 col-start-2 items-center justify-center">
          <img src={Star} alt="star" />
        </div>
        <div>
          <h3 className="font-semibold text-[32px] lg:text-[40px] leading-[150%]">
            100+
          </h3>
          <p className="text-base md:text-lg text-[#4D4D4D]">
            Bitirgan o’quvchilar
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-[32px] lg:text-[40px] leading-[150%]">
            7+
          </h3>
          <p className="text-base md:text-lg text-[#4D4D4D]">
            yildan ortiq tajriba
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-[32px] lg:text-[40px] leading-[150%]">
            15+
          </h3>
          <p className="text-base md:text-lg text-[#4D4D4D]">
            Tajribali ustozlar
          </p>
        </div>
      </div>
    </div>
  );
}
