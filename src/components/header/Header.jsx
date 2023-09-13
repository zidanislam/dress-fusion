import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav className="grid grid-cols-3 mx-auto 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-6 2xl:my-16 xl:my-10 lg:my-8 md:my-5 my-5">
      <Link to="/">
        <img
          className="w-48 col-span-1 -ml-2"
          src="https://i.ibb.co/RjzHvh3/DRESS.png"
          alt="logo"
        />
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
      >
        {open ? <FaRegWindowClose /> : <FaBars />}
      </div>
      <div
        className={`my-auto md:text-right md:pb-2 pb-12 md:col-span-2 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-490px]"
        }`}
      >
        <Link
          to="/"
          className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
          onClick={() => setOpen(!open)}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
          onClick={() => setOpen(!open)}
        >
          Shop
        </Link>
        {/* <Link
          to="/about"
          className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
          onClick={() => setOpen(!open)}
        >
          About
        </Link> */}
        <Link
          to="/cart"
          className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
          onClick={() => setOpen(!open)}
        >
          Cart
        </Link>
        <Link
          to="/contact"
          className="2xl:mr-14 xl:mr-10 lg:mr-8 md:mr-4 text-base md:inline md:my-0 my-7 block"
          onClick={() => setOpen(!open)}
        >
          Sign In
        </Link>
        <Link to="/contact" className="text-base">
          <button
            className="border rounded-xl bg-black text-white drop-shadow-2xl xl:py-4 2xl:px-12 xl:px-10 lg:px-8 md:px-5 md:py-2 py-2 px-5 md:inline block "
            onClick={() => setOpen(!open)}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
