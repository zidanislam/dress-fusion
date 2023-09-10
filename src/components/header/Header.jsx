import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="grid grid-cols-3 mx-auto 2xl:px-80 xl:px-32 lg:px-20 2xl:my-16 xl:my-10 lg:my-8">
      <img
        className="w-48 col-span-1 -ml-2"
        src="https://i.ibb.co/RjzHvh3/DRESS.png"
        alt="logo"
      />
      <div className="my-auto text-right col-span-2">
        <Link to="/" className="2xl:mr-14 xl:mr-10 lg:mr-8 text-base">
          Home
        </Link>
        <Link to="/shop" className="2xl:mr-14 xl:mr-10 lg:mr-8 text-base">
          Shop
        </Link>
        <Link to="/orders" className="2xl:mr-14 xl:mr-10 lg:mr-8 text-base">
          Orders
        </Link>
        <Link to="/about" className="2xl:mr-14 xl:mr-10 lg:mr-8 text-base">
          About
        </Link>
        <Link to="/contact" className="2xl:mr-14 xl:mr-10 lg:mr-8 text-base">
          Sign In
        </Link>
        <Link to="/contact" className="text-base">
          <button className="border rounded-xl bg-black text-white drop-shadow-2xl py-4 2xl:px-12 xl:px-10 lg:px-8">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
