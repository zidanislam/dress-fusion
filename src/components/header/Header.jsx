import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="2xl:my-16 2xl:ml-80 xl:my-10 flex 2xl:justify-between xl:justify-around">
      <img
        className="w-48"
        src="https://i.ibb.co/RjzHvh3/DRESS.png"
        alt="logo"
      />
      <div className="my-auto 2xl:mr-80">
        <Link to="/" className="2xl:mr-14 xl:mr-10 text-base">
          Home
        </Link>
        <Link to="/shop" className="2xl:mr-14 xl:mr-10 text-base">
          Shop
        </Link>
        <Link to="/orders" className="2xl:mr-14 xl:mr-10 text-base">
          Orders
        </Link>
        <Link to="/about" className="2xl:mr-14 xl:mr-10 text-base">
          About
        </Link>
        <Link to="/contact" className="2xl:mr-14 xl:mr-10 text-base">
          Sign In
        </Link>
        <Link to="/contact" className="text-base">
          <button className="border rounded-xl bg-black text-white drop-shadow-2xl py-4 2xl:px-12 xl:px-10">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
