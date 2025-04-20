import React from "react";

export default function Contact() {
  return (
    <div className="bg-red-radial text-white container rounded-3xl px-5 py-4">
      <h2 className="text-center text-[40px] font-semibold leading-[150%]">
        <span className="hidden md:block">Biz bilan bog’lanish uchun</span>
        <span className="block md:hidden">Bog’lanish uchun</span>
      </h2>
      <p className="text-base lg:text-xl text-center lg:w-[80%] text-[#FFFFFFE5] pt-3 mx-auto">
        Biz bilan bog'lanish va promolar, chegirmalar va boshqa ko'p narsalardan
        bahramand bo'lish uchun obuna bo'ling
      </p>

      <form className="grid w-full gap-4 pt-6 md:grid-cols-2 max-w-[900px] mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent outline-none font-medium text-sm lg:text-xl py-4 lg:py-[25px] px-10 border border-white rounded-xl lg:rounded-3xl placeholder:text-white"
        />
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-transparent outline-none font-medium text-sm lg:text-xl py-4 lg:py-[25px] px-10 border border-white rounded-xl lg:rounded-3xl placeholder:text-white"
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          className="bg-transparent outline-none font-medium text-sm md:col-span-2 md:max-w-[411px] lg:max-w-[490px] lg:text-xl py-4 lg:py-[25px] px-10 border border-white rounded-xl lg:rounded-3xl w-full block placeholder:text-white mx-auto"
        />

        <button
          type="button"
          className="text-black block mx-auto md:col-span-2 mt-6 lg:mt-12 font-semibold text-lg lg:text-[32px] px-20 lg:px-24 py-4 bg-white rounded-xl"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}
