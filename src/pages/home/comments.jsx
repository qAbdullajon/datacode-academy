import React from "react";
import Avatar from "../../assets/avatar.png";
import StarImage from "../../assets/Star_fill.svg";

const commants = [
  {
    id: 1,
    name: "Anvar Narzullayev",
    gitCourseAlumni: "“Git” kursi bitiruvchisi",
    star: 4,
    avatar: Avatar,
  },
  {
    id: 2,
    name: "Anvar Narzullayev",
    gitCourseAlumni: "“Git” kursi bitiruvchisi",
    star: 4,
    avatar: Avatar,
  },
  {
    id: 3,
    name: "Anvar Narzullayev",
    gitCourseAlumni: "“Git” kursi bitiruvchisi",
    star: 4,
    avatar: Avatar,
  },
  {
    id: 4,
    name: "Anvar Narzullayev",
    gitCourseAlumni: "“Git” kursi bitiruvchisi",
    star: 4,
    avatar: Avatar,
  },
  {
    id: 5,
    name: "Anvar Narzullayev",
    gitCourseAlumni: "“Git” kursi bitiruvchisi",
    star: 4,
    avatar: Avatar,
  },
  {
    id: 6,
    name: "Anvar Narzullayev",
    gitCourseAlumni: "“Git” kursi bitiruvchisi",
    star: 4,
    avatar: Avatar,
  },
];

export default function Comments() {
  return (
    <div className="container">
      <p className="text-center font-semibold text-[32px] lg:text-[40px] leading-[150%] pb-6">
        Bizning o’quvchilarning fikrlari
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {commants.map((item) => (
          <div key={item.id} className="p-6 bg-[#FDF5F5] rounded-3xl">
            <div className="flex items-center gap-4">
              <img src={item.avatar} alt="avatar" className="w-20 h-20" />
              <div className="max-w-[128px]">
                <p className="font-bold text-xl pb-2">{item.name}</p>
                <p className="text-[12px]">{item.gitCourseAlumni}</p>
                <div className="flex">
                  {Array.from({ length: item.star - 1 || 0 }).map((_, i) => (
                    <img key={i} src={StarImage} alt="star" />
                  ))}
                  <img src={StarImage} alt="" />
                </div>
              </div>
            </div>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-[150%] pt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
