import React from "react";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonial.css";
register();

const Testimonial = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h2 className="2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl text-xl mb-3 text-gray-800">
          This Is What Our Customers Say
        </h2>
        <p className="2xl:text-base md:text-sm text-xs  -mb-10 text-gray-700">
          Find out what our customers think about us.
        </p>
      </div>
      <div className="flex justify-center place-items-center align-middle">
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
          <img
            src="https://i.ibb.co/tCznTYC/card.png"
            className="my-coverflow-slide md:w-auto flex w-3/4 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/d5MBpK1/card-2.png"
            className="my-coverflow-slide md:w-auto flex w-3/4 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/whQk7y1/card-3.png"
            className="my-coverflow-slide md:w-auto flex w-3/4 mx-auto"
          />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
