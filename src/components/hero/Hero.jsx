import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 2xl:gap-12 gap-9 mx-auto mb-6 2xl:px-80 xl:px-32 lg:px-20">
      <div className="w-full 2xl:pt-48 xl:pt-32 lg:pt-24 rounded-xl bg-gray-300">
        <img src="https://i.ibb.co/KGxFdyR/hero-l-img.png" alt="" />
      </div>
      <div className="grid grid-cols-1 2xl:gap-20 xl:gap-6 lg:gap-10 text-center">
        <div className="bg-gray-300 rounded-xl px-2 2xl:pt-7 xl:pt-8">
          <img src="https://i.ibb.co/GnJYWFX/hero-img.png"  className="2xl:mt-2" alt="" />
        </div>
        <div>
          <h1 className="mb-10">
            <span className="text-gray-800 xl:text-7xl lg:text-6xl hero-head font-medium">
              ULTIMATE
            </span>
            <br />
            <span className="xl:text-9xl lg:text-8xl font-bold text-stroke">SALE</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-800 mb-9">NEW COLLECTION</p>
          <button className="bg-black text-white py-5 px-14 rounded-xl text-base">
            SHOP NOW
          </button>
        </div>
        <img src="https://i.ibb.co/M2TYwbD/hero-b-img.png" alt="" />
      </div>
      <div className="2xl:pt-48 xl:pt-36 lg:pt-10 rounded-xl bg-gray-300">
        <img
          src="https://i.ibb.co/2FQ74fw/hero-r-img.png"
          className="mx-auto lg:w-48"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
