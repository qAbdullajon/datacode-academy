import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Sw1 from "../../assets/comunity.png";
import Sw2 from "../../assets/comunity.png";
import Sw3 from "../../assets/comunity.png";
import Linkedin from "../../assets/linkedin.png"

const items = [
  {
    id: 1,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw1,
  },
  {
    id: 2,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw2,
  },
  {
    id: 3,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw3,
  },
  {
    id: 4,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw1,
  },
  {
    id: 5,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw1,
  },
  {
    id: 6,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw2,
  },
  {
    id: 7,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw3,
  },
  {
    id: 8,
    name: "Ismoil Safarov",
    job: "Ux/Ui designer",
    img: Sw1,
  },
];

export default function Community() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="px-10">
      <p className="font-semibold text-[40px] leading-[150%] text-center pb-6">
        Bizning jamoa
      </p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        loop={true}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="cursor-pointer bg-[#F9F9F9] rounded-2xl overflow-hidden"
            style={{
              height: "315px",
              width: "100%",
            }}
          >
            <div className="">
              <img
                src={item.img}
                className="w-full h-[232px] object-cover object-top swiper-img"
                alt=""
              />
            </div>
            <div className="h-[83px] flex justify-between items-center px-3">
              <div>
                <p className="text-base font-semibold leading-7">{item.name}</p>
                <p className="text-[#4D4D4D] text-[12px] font-medium">
                  {item.job}
                </p>
              </div>
              <img src={Linkedin} alt="img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
