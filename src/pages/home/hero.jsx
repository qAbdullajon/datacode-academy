import React from "react";
import HeroImage from "../../assets/hero-img.png";

export default function Hero() {
  return (
    <div className="container h-[650px] hero-bg rounded-3xl flex items-center px-9">
      <div className="w-[60%]">
        <h1 className="font-semibold text-[48px] leading-[130%] urbanist">
          Kuchli IT bilimlari uchun to‘g‘ri manzil –{" "}
          <span className="italic font-extrabold">DataAcademy!</span>
        </h1>
        <p className="text-lg pt-[23px] pb-[60px]">
          Interaktiv darslar, amaliy loyihalar va mentorlik dasturlari bilan IT
          bilimlarini rivojlantiring
        </p>
        <div className="flex items-center gap-6">
          <button className="text-xl text-white py-[15px] px-10 bg-[#D32F2F] rounded-xl">
            Kurslarni tanlash
          </button>
          <button className="text-xl py-[15px] px-10 rounded-xl border-2 border-[#D32F2F]">
            Bepul darsni ko’rish
          </button>
        </div>
      </div>
      <div>
        <img width='487' src={HeroImage} alt="" />
      </div>
    </div>
  );
}
