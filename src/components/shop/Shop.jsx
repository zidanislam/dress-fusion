import React from "react";
import Cart from "../cart/Cart";
import Products from "../products/Products";

const Shop = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Products/>
      <Cart />
    </div>
  );
};

export default Shop;
