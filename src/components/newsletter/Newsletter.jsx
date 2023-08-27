import React from "react";

const Newsletter = () => {
  return (
    <div className="flex justify-center align-middle 2xl:my-18 xl:my-16">
      <img src="https://i.ibb.co/NC0Xm4d/newsletter-male.png" className="xl:w-56" alt="" />
      <div className="flex flex-col items-center my-auto">
        <h2 className="heading xl:text-4xl my-5 text-center">
          Follow Us On Instagram
        </h2>
        <p className="text-center mb-5 text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
          <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
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
      <img src="https://i.ibb.co/nCL8cv0/newsletter-female.png" className="xl:w-56" alt="" />
    </div>
  );
};

export default Newsletter;
