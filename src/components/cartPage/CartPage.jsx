import React from "react";
import { useCartContext } from "../../context/cartContext";
import CartProduct from "../cartProduct/CartProduct";

const CartPage = () => {
  const { cart } = useCartContext();

  return (
    <div className="mx-auto 2xl:px-80 xl:px-32 lg:px-20">
      <div className="grid lg:grid-cols-5 grid-cols-3 text-center">
        <p>Name</p>
        <p className="lg:block hidden">Price</p>
        <p>Quantity</p>
        <p className="lg:block hidden">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />
      {cart.map((product) => {
        return <CartProduct key={product._id} {...product} />;
      })}
    </div>
  );
};

export default CartPage;
