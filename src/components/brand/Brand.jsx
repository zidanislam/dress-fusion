import React from "react";

const Brand = () => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-3 lg:py-14 md:py-10 place-items-center text-center 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-6 md:gap-12 gap-10 md:drop-shadow-xl bg-white md:mb-14 mb-10">
      <img
        src="https://i.ibb.co/zSQG6BJ/chanel.png"
        className="md:w-full"
        alt=""
      />
      <img
        src="https://i.ibb.co/k4DrPcQ/louis.png"
        className="md:w-full"
        alt=""
      />
      <img
        src="https://i.ibb.co/7rMLNtL/prada.png"
        className="md:w-full md:block hidden"
        alt=""
      />
      <img
        src="https://i.ibb.co/3SNnrcv/calvin.png"
        className="md:w-full"
        alt=""
      />
      <img
        src="https://i.ibb.co/Yc7H66H/denim.png"
        className="md:w-full md:block hidden"
        alt=""
      />
    </div>
  );
};

export default Brand;
