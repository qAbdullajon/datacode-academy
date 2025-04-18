import React from "react";
import Logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

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
  const location = useLocation();
  return (
    <div className="flex items-center justify-between container py-[15px]">
      {/* Logo */}
      <NavLink to={"/"} className="flex items-center gap-3">
        <img src={Logo} width={32} alt="logo" />
        <p className="text-lg font-semibold text-black leading-[22px]">
          DataCode <br /> Academy
        </p>
      </NavLink>

      {/* Navbar */}
      <nav className="flex items-center gap-10">
        {navList.map((item) => (
          <NavLink key={item.id}
            className={`text-xl text-black hover:text-black ${
              item.path === location.pathname && "font-bold"
            }`}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Login */}
      <div>
        <button className="border-2 border-[#D32F2F] px-10 py-[10px] rounded-xl">
          Kirish
        </button>
      </div>
    </div>
  );
}
