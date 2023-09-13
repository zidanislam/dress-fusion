import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-3 2xl:gap-12 xl:gap-9 lg:gap-9 md:gap-5 gap-3 mx-auto mb-6 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-6">
      <div className="w-full 2xl:pt-20 xl:pt-32 lg:pt-24 md:pt-16 pt-5 rounded-xl bg-gray-300  md:block hidden">
        <img
          src="https://i.ibb.co/KGxFdyR/hero-l-img.png"
          className="2xl:w-full"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-5 text-center">
        <div className="bg-gray-300 md:ounded-xl rounded-md w-full flex align-bottom px-2 2xl:pt-12 xl:pt-4 lg:pt-4 md:pt-5 pt-1">
          <img
            src="https://i.ibb.co/GnJYWFX/hero-img.png"
            className="2xl:mt-2"
            alt=""
          />
        </div>
        <div className="grid 2xl:gap-1 xl:gap-2">
          <h1 className="2xl:mb-5 text-gray-800 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl hero-head font-medium mt-3">
            ULTIMATE
          </h1>
          <h1 className="2xl:text-9xl xl:text-9xl lg:text-8xl md:text-7xl text-8xl font-bold text-stroke">
            SALE
          </h1>
          <p className="2xl:text-2xl lg:text-xl md:text-base text-xl text-gray-800 2xl:mb-5 xl:mb-4 lg:mb-3 md:mb-2">
            NEW COLLECTION
          </p>
          <div>
            <button className="bg-black text-white xl:py-5 xl:px-14 lg:py-2.5 lg:px-5 md:py-2 md:px-3 px-3.5 py-2 md:rounded-xl rounded-md xl:text-base md:text-sm text-lg my-3">
              SHOP NOW
            </button>
          </div>
        </div>
        <img src="https://i.ibb.co/M2TYwbD/hero-b-img.png" alt="" />
      </div>
      <div className="2xl:pt-14 xl:pt-24 lg:pt-12 md:pt-5 rounded-xl bg-gray-300 md:block hidden">
        <img
          src="https://i.ibb.co/2FQ74fw/hero-r-img.png"
          className="mx-auto 2xl:w-4/5 xl:w-64 lg:w-48 md:w-3/4 w-3/4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
