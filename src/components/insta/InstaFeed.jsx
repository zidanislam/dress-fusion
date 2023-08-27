import React from "react";
import "./insta-feed.css";

const InstaFeed = () => {
  return (
    <>
      <div className="2xl:my-20 xl:my-16">
        <h2 className="heading text-center">Follow Us On Instagram</h2>
        <p className="text-center text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
          <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>
      <div className="flex place-items-center xl:justify-center">
        <img
          src="https://i.ibb.co/b73h34G/insta-1.png"
          className="2xl:w-80 xl:w-56"
          alt=""
        />
        <img
          src="https://i.ibb.co/vZ32NNB/insta-2.png"
          className="2xl:w-64 xl:w-44"
          alt=""
        />
        <img
          src="https://i.ibb.co/frV8fFL/insta-3.png"
          className="2xl:w-64 xl:w-44"
          alt=""
        />
        <img
          src="https://i.ibb.co/Yj0N6Tq/insta-4.png"
          className="2xl:w-64 xl:w-44"
          alt=""
        />
        <img
          src="https://i.ibb.co/qyBhxL7/insta-5.png"
          className="2xl:w-64 xl:w-44"
          alt=""
        />
        <img
          src="https://i.ibb.co/Khf4tLg/insta-6.png"
          className="2xl:w-64 xl:w-44"
          alt=""
        />
        <img
          src="https://i.ibb.co/rvK7JnZ/insta-7.png"
          className="2xl:w-80 xl:w-56"
          alt=""
        />
      </div>
    </>
  );
};

export default InstaFeed;
