import React from "react";
import HeroImage from "../../assets/hero-img.png";

export default function Hero() {
  return (
    <div className="container py-[30px] md:py-10 hero-bg rounded-3xl grid md:grid-cols-[60%_40%] px-[14px] md:px-[30px] lg:px-9 lg:py-20 md:items-center">
      <div className="">
        <h1 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[130%] urbanist">
          Kuchli IT bilimlari uchun to‘g‘ri manzil –{" "}
          <span className="italic font-extrabold">DataAcademy!</span>
        </h1>
        <p className="text-[12px] lg:text-lg pt-3 lg:pt-[23px]">
          Interaktiv darslar, amaliy loyihalar va mentorlik dasturlari bilan IT
          bilimlarini rivojlantiring
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-6 row-start-3 md:col-start-1 md:col-end-3 xl:col-end-2 xl:row-start-2">
        <button className="text-[12px] md:text-base lg:text-xl text-white py-[10px] lg:py-[15px] px-10 bg-[#D32F2F] rounded-xl">
          Kurslarni tanlash
        </button>
        <button className="text-[12px] md:text-base lg:text-xl py-[10px] lg:py-[15px] px-10 rounded-xl border-2 border-[#D32F2F]">
          Bepul darsni ko’rish
        </button>
      </div>
      <div className="w-[80%] max-w-[320px] md:w-[90%] lg:max-w-[400px] mx-auto py-10 md:py-0 xl:row-start-1 xl:row-end-3 xl:col-start-2">
        <img className="w-full" src={HeroImage} alt="" />
      </div>
    </div>
  );
}
