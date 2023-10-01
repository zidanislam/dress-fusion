import React from "react";

const InstaFeed = () => {
  return (
    <>
      <div className="2xl:my-20 lg:my-16 md:my-10 my-4">
        <h2 className="2xl:text-5xl xl:text-3xl lg:text-3xl md:text-2xl text-xl my-5 text-center">Follow Us On Instagram</h2>
        <p className="text-center md:text-base text-xs md:px-2 px-5 lg:mb-8 text-gray-600">
          Find out more about our products and our newest updates in worlds most populas social platform.
        </p>
      </div>
      <div className="flex md:flex-nowrap md:overflow-hidden flex-wrap md:gap-0 gap-2 place-items-center justify-center">
        <img
          src="https://i.ibb.co/b73h34G/insta-1.png"
          className="2xl:w-80 xl:w-56 lg:w-40 md:w-32 w-28"
          alt=""
        />
        <img
          src="https://i.ibb.co/vZ32NNB/insta-2.png"
          className="2xl:w-64 xl:w-44 lg:w-32 md:w-24 w-28"
          alt=""
        />
        <img
          src="https://i.ibb.co/frV8fFL/insta-3.png"
          className="2xl:w-64 xl:w-44 lg:w-32 md:w-24 w-28"
          alt=""
        />
        <img
          src="https://i.ibb.co/Yj0N6Tq/insta-4.png"
          className="2xl:w-64 xl:w-44 lg:w-32 md:w-24 w-28 md:block hidden"
          alt=""
        />
        <img
          src="https://i.ibb.co/qyBhxL7/insta-5.png"
          className="2xl:w-64 xl:w-44 lg:w-32 md:w-24 w-28"
          alt=""
        />
        <img
          src="https://i.ibb.co/Khf4tLg/insta-6.png"
          className="2xl:w-64 xl:w-44 lg:w-32 md:w-24 w-28"
          alt=""
        />
        <img
          src="https://i.ibb.co/rvK7JnZ/insta-7.png"
          className="2xl:w-80 xl:w-56 lg:w-40 md:w-32 w-28"
          alt=""
        />
      </div>
    </>
  );
};

export default InstaFeed;
