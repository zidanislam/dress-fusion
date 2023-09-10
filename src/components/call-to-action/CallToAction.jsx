import React from "react";
import "./call-to-action.css";

const CallToAction = () => {
  return (
    <>
      <div className="skewed-box">
        <div className="imagebox h-full lg:h-96 bg-gray-100">
          <img
            src="https://i.ibb.co/PCJFK74/call-to-action.png"
            className="h-full lg:h-96"
            alt=""
          />
        </div>
        <div className="text box-border">
          <div className="flex flex-col items-start mt-16 lg:mt-5 px-8 gap-5 lg:gap-2">
            <p className="text-base text-gray-600">Women Collection</p>
            <h2 className="text-5xl lg:text-3xl">Peaky Blinders</h2>
            <p className="text-base text-gray-900 underline">DESCRIPTION</p>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin.
            </p>
            <p className="">
              Size: <span>M</span>
            </p>
            <p className="price">
              $100.<span className="text-xl">00</span>
            </p>
            <button className="bg-black text-white py-2.5 px-14 text-base rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 py-14 place-items-center 2xl:px-80 xl:px-32 lg:px-20 lg:gap-2 xl:gap-3 drop-shadow-xl bg-white mb-14">
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/CscmmYy/hand-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg lg:text-base">High Quality</h2>
            <p className="2xl:text-base xl:text-sm lg:text-sm">
              Created from top materials
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/D8TwST3/warranty-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg lg:text-base">Warranty Protection</h2>
            <p className="2xl:text-base xl:text-sm lg:text-sm">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/tPNTTW3/box-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg lg:text-base">Free Shipping</h2>
            <p className="2xl:text-base xl:text-sm lg:text-sm">Order Over $150</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/X3pKYP3/phone-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg lg:text-base">24/7 Call Support</h2>
            <p className="2xl:text-base xl:text-sm lg:text-sm">Dedicated Support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
