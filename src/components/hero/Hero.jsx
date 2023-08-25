import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 gap-9 mx-auto 2xl:px-80 xl:px-32 mb-14">
      <div className="2xl:w-96 xl:w-80 xl:ml-6 2xl:pt-48 xl:pt-32 rounded-xl bg-gray-300">
        <img src="https://i.ibb.co/KGxFdyR/hero-l-img.png" alt="" />
      </div>
      <div className="grid grid-cols-1 gap-9 text-center">
        <div className="bg-gray-300 rounded-xl px-2 2xl:pt-7 xl:pt-8">
          <img src="https://i.ibb.co/GnJYWFX/hero-img.png" alt="" />
        </div>
        <div className="text-center">
          <h1>
            <span className="text-gray-800 2xl:text-8xl xl:text-7xl hero-head font-medium">ULTIMATE</span>
            <br />
            <span className="size xl:text-9xl font-bold text-stroke">SALE</span>
          </h1>
          <p className="text-xl text-gray-800 mb-5">NEW COLLECTION</p>
          <button className="bg-black text-white py-5 px-14 rounded-xl text-base">
            SHOP NOW
          </button>
        </div>
        <img src="https://i.ibb.co/M2TYwbD/hero-b-img.png" alt="" />
      </div>
      <div className="2xl:w-96 xl:w-80 2xl:pt-48 xl:pt-16 rounded-xl -mr-8 bg-gray-300">
        <img
          src="https://i.ibb.co/2FQ74fw/hero-r-img.png"
          className="mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
