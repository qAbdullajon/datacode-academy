import React from "react";
import Image from "../../assets/about.jpg";
import AboutImg from "../../assets/about-s.png";
import Star from "../../assets/star.png"

export default function About() {
  return (
    <div className="container flex gap-12">
      <div className="w-1/2 relative">
        <img className="top-0 left-0 z-10 absolute" src={AboutImg} alt="as" />
        <img
          src={Image}
          alt="img"
          className="w-[505px] h-[500px] object-cover rounded-[24px] absolute top-0 right-0"
        />
      </div>
      <div className="w-1/2">
        <h3 className="font-semibold text-[40px] pb-6 leading-[150%]">
          Biz haqimizda
        </h3>
        <p className="text-lg text-[#4D4D4D] leading-[150%] pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-[15px]">
          <div>
            <h3 className="font-semibold text-[40px] leading-[150%]">10+</h3>
            <p className="text-lg text-[#4D4D4D]">Bepul darslar</p>
          </div>
          <div className="row-start-1 row-end-3 col-start-2 flex items-center justify-center">
            <img src={Star}  alt="star" />
          </div>
          <div>
            <h3 className="font-semibold text-[40px] leading-[150%]">100+</h3>
            <p className="text-lg text-[#4D4D4D]">Bitirgan o’quvchilar</p>
          </div>
          <div>
            <h3 className="font-semibold text-[40px] leading-[150%]">7+</h3>
            <p className="text-lg text-[#4D4D4D]">yildan ortiq tajriba</p>
          </div>
          <div>
            <h3 className="font-semibold text-[40px] leading-[150%]">15+</h3>
            <p className="text-lg text-[#4D4D4D]">Tajribali ustozlar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
