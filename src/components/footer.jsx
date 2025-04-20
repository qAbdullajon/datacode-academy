import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#201312] text-white px-[7.5%] py-[50px]">
      <div className="grid gap-10 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between items-start">
        <NavLink
          to={"/"}
          className="flex items-center gap-6 min-[500px]:col-span-2 md:col-span-1 !bg-transparent text-white hover:text-white"
        >
          <img src={Logo} alt="" />
          <p className="font-semibold text-[24px] min-[1360px]:text-[30px] leading-[100%]">
            DataCode <br />
            Academy
          </p>
        </NavLink>
        <div className="">
          <p className="text-lg font-medium pb-6">O’quv markaz</p>
          <div className="flex flex-col gap-3">
            <NavLink
              to={"#"}
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              Biz haqimizda
            </NavLink>
            <NavLink
              to={"#"}
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              Ommaviy oferta
            </NavLink>
            <NavLink
              to={"#"}
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              Maxfiylik siyosati
            </NavLink>
            <NavLink
              to={"#"}
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              Fikrlar
            </NavLink>
            <NavLink
              to={"#"}
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
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
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              Kurslar
            </NavLink>
            <NavLink
              to={"#"}
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              O'qituvchilar
            </NavLink>
          </div>
        </div>
        <div className="md:col-start-2 lg:col-start-4">
          <p className="text-lg font-medium pb-6">Bog’lanish</p>
          <div className="flex flex-col gap-3">
            <NavLink
              to={"#"}
              className="font-medium text-sm text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              Operator bilan bog’lanish
            </NavLink>
          </div>
        </div>
        <div className="lg:col-start-4 xl:col-start-5">
          <p className="text-lg font-medium pb-6">Social</p>
          <div className="flex gap-[25px]">
            <NavLink
              to={"#"}
              className="text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              <Facebook size={24} strokeWidth={3} />
            </NavLink>
            <NavLink
              to={"#"}
              className="text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              <Instagram size={24} strokeWidth={3} />
            </NavLink>
            <NavLink
              to={"#"}
              className="text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              <Twitter size={24} strokeWidth={3} />
            </NavLink>
            <NavLink
              to={"#"}
              className="text-[#dedada] !bg-transparent hover:text-[#dedada]"
            >
              <Youtube size={24} strokeWidth={3} />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1073px] pt-6">
        <div className="w-full h-[1px] bg-[#403534]"></div>
        <p className="text-start md:text-center text-sm pt-6">
          © 2019 Lift Media | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
