import React from "react";
import Course1 from "../../assets/course1.png";
import Course2 from "../../assets/course2.png";
import Course3 from "../../assets/course3.png";

const courses = [
  {
    id: 1,
    name: "HTML dasturlash. Standard",
    auther: "Anvar Narzullayev",
    desc: "Bu kursni o’rganish orqali siz vebsaytlar va har xil test formalar yarata olasiz. Albatta ",
    img: Course1,
  },
  {
    id: 2,
    name: "HTML dasturlash. Standard",
    auther: "Anvar Narzullayev",
    desc: "Bu kursni o’rganish orqali siz vebsaytlar va har xil test formalar yarata olasiz. Albatta ",
    img: Course2,
  },
  {
    id: 3,
    name: "HTML dasturlash. Standard",
    auther: "Anvar Narzullayev",
    desc: "Bu kursni o’rganish orqali siz vebsaytlar va har xil test formalar yarata olasiz. Albatta ",
    img: Course3,
  },
  {
    id: 4,
    name: "HTML dasturlash. Standard",
    auther: "Anvar Narzullayev",
    desc: "Bu kursni o’rganish orqali siz vebsaytlar va har xil test formalar yarata olasiz. Albatta ",
    img: Course1,
  },
  {
    id: 5,
    name: "HTML dasturlash. Standard",
    auther: "Anvar Narzullayev",
    desc: "Bu kursni o’rganish orqali siz vebsaytlar va har xil test formalar yarata olasiz. Albatta ",
    img: Course2,
  },
  {
    id: 6,
    name: "HTML dasturlash. Standard",
    auther: "Anvar Narzullayev",
    desc: "Bu kursni o’rganish orqali siz vebsaytlar va har xil test formalar yarata olasiz. Albatta ",
    img: Course3,
  },
];

export default function Courses() {
  return (
    <div className="container">
      <p className="text-center font-semibold text-[40px] leading-[150%] pb-9">
        Kurslar
      </p>
      <div className="grid grid-cols-3 gap-x-5 gap-y-6">
        {courses.map((item) => (
          <div key={item.id} className="p-[30px] bg-[#F8F8F8] rounded-3xl">
            <div className="w-[88px] h-[88px] flex items-center justify-center bg-white rounded-full">
              <img src={item.img} alt={item.name} />
            </div>
            <p className="pt-10 font-bold text-xl pb-2">{item.name}</p>
            <p className="text-lg leading-[150%] pb-4">Mentor: {item.auther}</p>
            <p className="text-base text-[#4D4D4D] line-clamp-2 overflow-hidden pb-10">
              {item.desc}
            </p>
            <div className="flex justify-center">
              <button className="text-white py-[10px] px-[70px] bg-[#D32F2F] rounded-[120px]">
                Kursni boshlash
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-9">
        <button className="text-[#D32F2F] font-medium text-xl leading-[150%] py-4 px-24 border-2 border-[#D32F2F]">Barcha kurslarni ko’rish</button>
      </div>
    </div>
  );
}
