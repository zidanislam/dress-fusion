import React from "react";
import "./call-to-action.css";

const CallToAction = () => {
  return (
    <>
      <div className="skewed-box">
        <div className="imagebox h-full bg-gray-100">
          <img
            src="https://i.ibb.co/PCJFK74/call-to-action.png"
            className="h-full"
            alt=""
          />
        </div>
        <div className="text box-border">
          <div className="flex flex-col items-start mt-16 px-8 gap-5">
            <p className="text-base text-gray-600">Women Collection</p>
            <h2 className="heading">Peaky Blinders</h2>
            <p className="text-base text-gray-900 underline">DESCRIPTION</p>
            <p className="text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
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
      <div className="grid grid-cols-4 py-12 place-items-center 2xl:px-72 xl:px-28 xl:gap-3 drop-shadow-xl bg-white mb-14">
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/CscmmYy/hand-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg">High Quality</h2>
            <p className="2xl:text-base xl:text-sm">
              Created from top materials
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/D8TwST3/warranty-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg">Warranty Protection</h2>
            <p className="2xl:text-base xl:text-sm">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/tPNTTW3/box-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg">Free Shipping</h2>
            <p className="2xl:text-base xl:text-sm">Order Over $150</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/X3pKYP3/phone-icon.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg">24/7 Call Support</h2>
            <p className="2xl:text-base xl:text-sm">Dedicated Support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
