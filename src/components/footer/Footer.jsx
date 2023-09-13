import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-3">
        <img
          className="xl:w-48 lg:w-40 md:w-32 w-48 md:m-0 m-auto"
          src="https://i.ibb.co/RjzHvh3/DRESS.png"
          alt="logo"
        />
        <div className="md:text-end text-center md:my-auto m-auto text-gray-600 xl:text-base lg:text-sm md:text-xs text-xs">
          <a href="#" className=" xl:mr-5 lg:mr-3 md:mr-2 mr-1.5">
            Support Center
          </a>
          <a href="#" className=" xl:mr-5 lg:mr-3 md:mr-2 mr-1.5">
            Invoicing
          </a>
          <a href="#" className=" xl:mr-5 lg:mr-3 md:mr-2 mr-1.5">
            Contract
          </a>
          <a href="#" className=" xl:mr-5 lg:mr-3 md:mr-2 mr-1.5">
            Careers
          </a>
          <a href="#" className=" xl:mr-5 lg:mr-3 md:mr-2 mr-1.5">
            Blog
          </a>
          <a href="#" className=" xl:mr-5 lg:mr-3 md:mr-2 mr-1.5">
            FAQs
          </a>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-xs text-gray-600 text-center my-5">
          Copyright © 2023 DRESS-FUSION . All Rights Reseved.
        </p>
      </div>
    </>
  );
};

export default Footer;
