import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import CartProduct from "../cartProduct/CartProduct";

const CartPage = () => {
  const { cart, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col h-80 justify-center text-center">
        <p className="text-5xl mb-16">No Items In The Cart</p>
        <Link to="/shop" className="text-lg text-indigo-700">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto 2xl:px-80 xl:px-32 lg:px-20">
      <div className="grid lg:grid-cols-5 grid-cols-3 text-center mb-3">
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
      <div className="grid grid-cols-2 my-5">
        <Link to="/shop">
          <button className="bg-black text-white px-5 py-3 rounded-lg">
            Back to Shop
          </button>
        </Link>
        <div className="text-right">
          <button
            className="bg-red-700 text-white px-5 py-3 rounded-lg"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
