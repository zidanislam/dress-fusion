import React from "react";

const Newsletter = () => {
  return (
    <div className="grid grid-cols-3 place-items-center 2xl:px-80 xl:px-32 2xl:my-18 lg:px-20 xl:my-16 lg:my-14">
      <img
        src="https://i.ibb.co/NC0Xm4d/newsletter-male.png"
        className="xl:w-56 lg:w-44"
        alt=""
      />
      <div className="flex flex-col items-center my-auto">
        <h2 className="2xl:text-5xl xl:text-3xl lg:text-3xl my-5 text-center">
          Our Newsletter
        </h2>
        <p className="text-center mb-5 text-base text-gray-600">
          Stay connected with us with your email. Never miss an update.
        </p>
        <input
          type="email"
          className="block drop-shadow-2xl pl-5 py-4 w-full rounded-lg"
          placeholder="your@email.com"
        />
        <button className=" my-8 bg-black text-white py-2.5 px-14 text-base rounded-lg">
          Subscribe Now
        </button>
      </div>
      <img
        src="https://i.ibb.co/nCL8cv0/newsletter-female.png"
        className="xl:w-56 lg:w-44"
        alt=""
      />
    </div>
  );
};

export default Newsletter;
