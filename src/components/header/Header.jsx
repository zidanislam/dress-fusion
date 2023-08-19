import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="text-center my-10">
      <Link to="/" className="mr-4 text-xl">
        Home
      </Link>
      <Link to="/shop" className="mr-4 text-xl">
        Shop
      </Link>
      <Link to="/orders" className="mr-4 text-xl">
        Orders
      </Link>
      <Link to="/about" className="mr-4 text-xl">
        About
      </Link>
      <Link to="/contact" className="mr-4 text-xl">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
