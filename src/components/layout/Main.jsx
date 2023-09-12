import React from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../cartIcon/CartIcon";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CartIcon />
      <Footer />
    </>
  );
};

export default Main;
