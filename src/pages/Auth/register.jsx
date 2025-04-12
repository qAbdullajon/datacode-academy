import React, { useEffect, useState } from "react";
import AuthImage from "../../assets/auth-img.png";
import Logo from "../../assets/logo.png";
import EmailIcon from "../../assets/email-icon.png";
import Mask1 from "../../assets/mask1.png";
import Mask2 from "../../assets/mask2.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "false");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="min-h-screen login-bg-img w-full flex items-stretch justify-center lg:gap-[30px] xl:gap-[78px] p-2 lg:px-[15px] xl:px-[100px] lg:py-[57px] bg-white dark:bg-[#201312]">
        <img
          src={AuthImage}
          className="w-1/2 hidden lg:block object-cover rounded-[30px]"
          alt="auth img"
        />
        <div className="w-full border border-[#E8EBF1] max-w-[425px] lg:max-w-[551px] rounded-[24px] p-4 lg:p-6">
          <div className="flex items-center gap-6 pb-8 lg:pb-3">
            <img src={Logo} alt="logo" />
            <p className="xl:text-[40px] text-[32px] font-semibold dark:text-white">
              DataCode Academy
            </p>
          </div>
          <form className="pt-[32px] lg:pt-4">
            <div className="flex flex-col gap-[9px]">
              <label
                className="text-sm lg:text-lg font-semibold dark:text-white"
                htmlFor="name"
              >
                Ism, familiya
              </label>
              <div className="relative">
                <input
                  className="h-[48px] font-[Mukta] w-full bg-white pl-4 pr-[50px] py-[8px] rounded-[10px] border border-[#CACACA] outline-none"
                  placeholder="Ali Valiyev"
                  id="name"
                  type="text"
                />

                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                  <img src={EmailIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] pt-6">
              <label
                className="text-sm lg:text-lg font-semibold dark:text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  className="h-[48px] font-[Mukta] w-full bg-white pl-4 pr-[50px] py-[8px] rounded-[10px] border border-[#CACACA] outline-none"
                  placeholder="@example.com"
                  id="email"
                  type="email"
                />

                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                  <img src={EmailIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] pt-6">
              <label
                className="text-sm lg:text-lg font-semibold dark:text-white"
                htmlFor="parol"
              >
                Parol
              </label>
              <div className="relative">
                <input
                  className="h-[48px]  font-[Mukta] w-full bg-white pl-4 pr-[50px] py-[8px] rounded-[10px] outline-none border border-[#CACACA]"
                  id="parol"
                  type={showPassword ? "text" : "password"}
                  placeholder={
                    showPassword ? "Parolingizni kiriting" : "***********"
                  }
                />
                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                  <button
                    type="button"
                    className="bg-transparent p-0 border-0 focus:outline-none text-[#A7A7A7]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lock-keyhole-open-icon lucide-lock-keyhole-open"
                      >
                        <circle cx="12" cy="16" r="1" />
                        <rect width="18" height="12" x="3" y="10" rx="2" />
                        <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole cursor-pointer"
                      >
                        <circle cx="12" cy="16" r="1" />
                        <rect x="3" y="10" width="18" height="12" rx="2" />
                        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] pt-6">
              <label
                className="text-sm lg:text-lg font-semibold dark:text-white"
                htmlFor="parol"
              >
                Parolni tasdiqlash
              </label>
              <div className="relative">
                <input
                  className="h-[48px]  font-[Mukta] w-full bg-white pl-4 pr-[50px] py-[8px] rounded-[10px] outline-none border border-[#CACACA]"
                  id="parol"
                  type={showPassword2 ? "text" : "password"}
                  placeholder={
                    showPassword2 ? "Parolingizni kiriting" : "***********"
                  }
                />
                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                  <button
                    type="button"
                    className="bg-transparent p-0 border-0 focus:outline-none text-[#A7A7A7]"
                    onClick={() => setShowPassword2(!showPassword2)}
                  >
                    {showPassword2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lock-keyhole-open-icon lucide-lock-keyhole-open"
                      >
                        <circle cx="12" cy="16" r="1" />
                        <rect width="18" height="12" x="3" y="10" rx="2" />
                        <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole cursor-pointer"
                      >
                        <circle cx="12" cy="16" r="1" />
                        <rect x="3" y="10" width="18" height="12" rx="2" />
                        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button
                className="w-full bg-gradient-to-r from-[#E16D6D] to-[#D32F2F] text-xl font-semibold py-[10px] text-white"
                type="submit"
              >
                Kirish
              </button>
              <div className="pt-6 flex items-start justify-between px-5 lg:gap-[30px]">
                <p className="text-[#777777] text-base lg:text-xl">
                  Sizda allaqachon hisob bormi?
                </p>
                <button
                  onClick={() => navigate("/login")}
                  className="font-bold text-base lg:text-xl dark:text-white"
                  type="button"
                >
                  Kirish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button onClick={()=>setDarkMode(!darkMode)}>submit</button>
    </>
  );
}
