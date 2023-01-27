import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import partner5 from "../../images/partners/HI.webp"
import partner2 from "../../images/partners/H15.webp"
import partner3 from "../../images/partners/Judicata Juristbyrå.webp"
import partner4 from "../../images/partners/MLB.webp"
import partner1 from "../../images/partners/Malmö_FF_Logo.webp"
import partner6 from "../../images/partners/SnackaNu.webp"

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={partner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner6} />
        </SwiperSlide>
        <SwiperSlide>
         <img src={partner2} />
        </SwiperSlide>
        <SwiperSlide>
         <img src={partner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={partner4} />
        </SwiperSlide>
        <SwiperSlide>
         <img src={partner5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


