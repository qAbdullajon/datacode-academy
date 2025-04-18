import React from "react";

export default function Contact() {
  return (
    <div className="bg-red-radial text-white container rounded-3xl px-14 py-9">
      <h2 className="text-center text-[40px] font-semibold leading-[150%]">
        Biz bilan bog’lanish uchun
      </h2>
      <p className="text-xl text-center text-[#FFFFFFE5] pt-3 w-[60%] mx-auto">
        Biz bilan bog'lanish va promolar, chegirmalar va boshqa ko'p narsalardan
        bahramand bo'lish uchun obuna bo'ling
      </p>

      <form className="w-[70%] mx-auto mt-12">
        <div className="flex items-center gap-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none font-medium text-xl py-[25px] px-10 border border-white rounded-3xl w-1/2 placeholder:text-white"
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-transparent outline-none font-medium text-xl py-[25px] px-10 border border-white rounded-3xl w-1/2 placeholder:text-white"
          />
        </div>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="bg-transparent outline-none font-medium text-xl py-[25px] px-10 border border-white rounded-3xl w-full max-w-[490px] block placeholder:text-white mt-5 mx-auto"
        />

        <button type="button" className="text-black block mx-auto mt-12 font-semibold text-[32px] px-24 py-4 bg-white rounded-xl">
          Yuborish
        </button>
      </form>
    </div>
  );
}


