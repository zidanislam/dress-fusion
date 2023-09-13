import React from "react";

const Newsletter = () => {
  return (
    <div className="grid grid-cols-3 place-items-center 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-6 2xl:my-18 xl:my-16 md:my-14 my-2">
      <img
        src="https://i.ibb.co/NC0Xm4d/newsletter-male.png"
        className="xl:w-56 lg:w-44 md:w-40 w-24"
        alt=""
      />
      <div className="flex flex-col items-center my-auto">
        <h2 className="2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl text-lg my-5 md:text-center truncate">
          Our Newsletter
        </h2>
        <p className="text-center mb-5 xl:text-base md:text-sm text-xs text-gray-600">
          Stay connected with us with your email. Never miss an update.
        </p>
        <input
          type="email"
          className="block drop-shadow-2xl md:pl-5 pl-2 py-4 w-full rounded-lg mx-auto md:text-sm text-xs"
          placeholder="your@email.com"
        />
        <button className=" my-8 bg-black text-white xl:py-2.5 xl:px-14 md:py-2 md:px-5 py-2 px-3 md:text-base text-xs  md:rounded-lg rounded-md">
          Subscribe Now
        </button>
      </div>
      <img
        src="https://i.ibb.co/nCL8cv0/newsletter-female.png"
        className="xl:w-56 lg:w-44 md:w-40 w-24"
        alt=""
      />
    </div>
  );
};

export default Newsletter;
