import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Sw1 from "../../assets/sw1.png";
import Sw2 from "../../assets/sw2.png";
import Sw3 from "../../assets/sw3.png";

const items = [
  {
    id: 1,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw1,
  },
  {
    id: 2,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw2,
  },
  {
    id: 3,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw3,
  },
  {
    id: 4,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw1,
  },
  {
    id: 5,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw1,
  },
  {
    id: 6,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw2,
  },
  {
    id: 7,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw3,
  },
  {
    id: 8,
    name: "Ismoil Safarov",
    desc: "2014-yildan beri dars berib keladi. YouTubeda 129.0000 dan ziyod obunachilarg",
    img: Sw1,
  },
];

export default function Teachers() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container">
      <p className="font-semibold text-[32px] lg:text-[40px] leading-[150%] text-center pb-6 lg:pb-[60px]">Bizning tajribali <span className="italic text-[#D32F2F]">o’qituvchilarimiz</span> bilan tanishing!</p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        slidesPerView='auto'
        centeredSlides={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: {
            centeredSlides: false
          }
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
            className="cursor-pointer"
            style={{
              height: "479px",
              width: "295px",
              maxWidth: "295px",
              flexShrink: 0
            }}
          >
            <div>
              <img
                src={item.img}
                className="w-full h-full object-contain leading-[100%] rounded-lg swiper-img"
                alt=""
              />
            </div>
            <p className="text-[28px] font-semibold">{item.name}</p>
            <p className="text-base md:text-lg text-[#4D4D4D] leading-[150%] line-clamp-3 overflow-hidden">
              {item.desc}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
