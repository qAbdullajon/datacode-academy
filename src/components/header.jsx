import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const navList = [
  {
    id: 1,
    name: "Bosh sahifa",
    path: "/",
  },
  {
    id: 2,
    name: "O’qituvchilar",
    path: "/teachers",
  },
  {
    id: 3,
    name: "Kurslar",
    path: "/courses",
  },
  {
    id: 4,
    name: "Biz haqimizda",
    path: "/about",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* HEADER */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-20 bg-white w-[85%] py-[15px] flex items-center justify-between">
        {/* Logo */}
        <NavLink to={"/"} className="flex items-center gap-3 !bg-transparent">
          <img src={Logo} width={32} alt="logo" />
          <p className="text-lg font-semibold text-black leading-[22px]">
            DataCode <br /> Academy
          </p>
        </NavLink>

        {/* Navbar (desktop) */}
        <nav className="items-center gap-10 hidden lg:flex">
          {navList.map((item) => (
            <NavLink
              key={item.id}
              className={`text-xl text-black !bg-transparent hover:text-black ${
                item.path === location.pathname ? "font-bold" : ""
              }`}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Login */}
        <button className="hidden lg:block border-2 border-[#D32F2F] px-10 py-[10px] rounded-xl">
          Kirish
        </button>

        {/* Mobile menu icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-30">
          <Menu />
        </button>
      </div>

      <div
        className={`bg-white shadow-md flex justify-between flex-col pb-8 w-full fixed left-0 transition-all duration-75 ease-in-out z-10 ${
          isOpen ? "top-[78px] h-[calc(100vh-78px)]" : "-top-96"
        }`}
      >
        <ul className="flex flex-col gap-4 pt-2 text-xl container">
          {navList.map((item) => (
            <NavLink
              key={item.id}
              className={`text-black text-lg font-medium !bg-transparent hover:text-blue-600 ${
                item.path === location.pathname ? "font-bold" : ""
              }`}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
        <button className="border-2 bg-[#D32F2F] w-full text-white max-w-[284px] mx-auto py-[15px] rounded-xl font-medium">
          Kirish
        </button>
      </div>
    </>
  );
}
