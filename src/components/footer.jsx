import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#201312] text-white px-[7.5%] py-[50px]">
      <div className="flex justify-between items-start">
        <NavLink to={'/'} className="flex items-center gap-6 !bg-transparent text-white hover:text-white">
          <img src={Logo} alt="" />
          <p className="font-semibold text-[32px] leading-[100%]">
            DataCode <br />
            Academy
          </p>
        </NavLink>
        <div className="grid items-start grid-cols-4 gap-20 justify-between">
          <div>
            <p className="text-lg font-medium pb-6">O’quv markaz</p>
            <div className="flex flex-col gap-3">
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                Biz haqimizda
              </NavLink>
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                Ommaviy oferta
              </NavLink>
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                Maxfiylik siyosati
              </NavLink>
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                Fikrlar
              </NavLink>
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                FAQ
              </NavLink>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium pb-6">Ta'lim</p>
            <div className="flex flex-col gap-3">
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                Kurslar
              </NavLink>
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                O'qituvchilar
              </NavLink>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium pb-6">Bog’lanish</p>
            <div className="flex flex-col gap-3">
              <NavLink
                to={"#"}
                className="font-medium text-sm text-white !bg-transparent hover:text-white"
              >
                Operator bilan bog’lanish
              </NavLink>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium pb-6">Social</p>
            <div className="flex gap-[25px]">
              <NavLink
                to={"#"}
                className="text-white !bg-transparent hover:text-white"
              >
                <Facebook size={24} strokeWidth={3} />
              </NavLink>
              <NavLink
                to={"#"}
                className="text-white !bg-transparent hover:text-white"
              >
                <Instagram size={24} strokeWidth={3} />
              </NavLink>
              <NavLink
                to={"#"}
                className="text-white !bg-transparent hover:text-white"
              >
                <Twitter size={24} strokeWidth={3} />
              </NavLink>
              <NavLink
                to={"#"}
                className="text-white !bg-transparent hover:text-white"
              >
                <Youtube size={24} strokeWidth={3} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1073px] pt-6">
        <div className="w-full h-[1px] bg-white"></div>
        <p className="text-center text-sm pt-6">© 2019 Lift Media | All Rights Reserved</p>
      </div>
    </div>
  );
}
