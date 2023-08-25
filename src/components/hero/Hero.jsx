import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 gap-9 w-3/4 m-auto">
      <div className="2xl:w-96 xl:w-80 2xl:pt-48 rounded-xl bg-gray-300">
        <img src="https://i.ibb.co/KGxFdyR/hero-l-img.png" alt="" />
      </div>
      <div className="m-auto">
        <img src="https://i.ibb.co/GnJYWFX/hero-img.png" alt="" />
        <div>
          <h1>ULTIMATE SALE</h1>
          <p>NEW COLLECTION</p> <button>SHOP NOW</button>
        </div>
        <img src="https://i.ibb.co/M2TYwbD/hero-b-img.png" alt="" />
      </div>
      <div className="2xl:w-96 xl:w-80 m-auto 2xl:pt-48 rounded-xl bg-gray-300">
        <img src="https://i.ibb.co/2FQ74fw/hero-r-img.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
