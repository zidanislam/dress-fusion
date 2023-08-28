import React from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./../../img/card (1).png";
import slide2 from "./../../img/card (2).png";
import slide3 from "./../../img/card.png";
import "./testimonial.css";
register();

import { EffectCoverflow, Navigation } from "swiper/modules";
const Testimonial = () => {
  return (
    <>
    <div className="text-center mt-20">
        <h2 className="2xl:text-5xl xl:text-3xl mb-3 text-gray-800">This Is What Our Customers Say</h2>
        <p className="2xl:text-base xl:text-sm -mb-10 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
    </div>
      <Swiper
        effect={"coverflow"}
        slidesPerGroup={1}
        initialSlide={1}
        spaceBetween={-450}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} className="my-coverflow-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="my-coverflow-slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="my-coverflow-slide" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
