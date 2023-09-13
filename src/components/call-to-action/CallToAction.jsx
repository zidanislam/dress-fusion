import React from "react";
import { Link } from "react-router-dom";
import "./call-to-action.css";

const CallToAction = () => {
  return (
    <div className="box-border flex justify-center">
      <div className="skewed skewed-left">
        <div className="image">
          <div>
            <img
              src="https://i.ibb.co/PCJFK74/call-to-action.png"
              className="call-image"
              alt=""
            />
          </div>
        </div>
        <div className="text my-auto flex flex-col 2xl:gap-10 md:gap-2 gap-4 md:px-3 p-5">
          <p className="lg:text-base md:text-sm text-base text-gray-600">
            Women Collection
          </p>
          <h2 className="xl:text-5xl lg:text-3xl md:text-xl text-2xl">
            Peaky Blinders
          </h2>
          <p className="lg:text-base md:text-sm text-gray-900 underline">
            DESCRIPTION
          </p>
          <p className="lg:text-base md:text-xs text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin.
          </p>
          <p className="">
            Size: <span>M</span>
          </p>
          <p className="lg:text-2xl md:text-xl">
            $100.<span className="lg:text-xl md:text-base">00</span>
          </p>
          <Link to="/product/623853b2736f19fd4eb8d44a">
            <button className="bg-black text-white lg:py-2.5 lg:px-14 md:py-2 md:px-8 lg:text-base md:text-sm md:rounded-lg py-2 px-3 rounded-md">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
