import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import CartProduct from "../cartProduct/CartProduct";

const CartPage = () => {
  const { cart, clearCart, total_price, shipping } = useCartContext();
  console.log(total_price);

  const tax = (total_price * 7) / 100;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col h-80 justify-center text-center">
        <p className="text-5xl mb-16">No Items In The Cart</p>
        <Link to="/shop" className="text-lg text-indigo-700">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-6 ">
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
          <button className="bg-black text-white md:px-5 md:py-3 md:rounded-lg px-2.5 py-1.5 rounded-md">
            Back to Shop
          </button>
        </Link>
        <div className="text-right">
          <button
            className="bg-red-700 text-white md:px-5 md:py-3 md:rounded-lg px-2.5 py-1.5 rounded-md"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="my-10 grid md:grid-cols-5 grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-slate-100 p-8">
          <div className="grid grid-cols-2 mb-1">
            <h4 className="text-lg">Subtotal:</h4>
            <p>$ {total_price.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 mb-1">
            <h4 className="text-lg">Shipping:</h4>
            <p className="text-lg">$ {shipping.toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 mb-1">
            <h4 className="text-lg">TAX:</h4>
            <p className="text-lg">$ {tax.toFixed(2)}</p>
          </div>
          <hr className=" border-black mb-1" />
          <div className="grid grid-cols-2 gap-2 mb-1">
            <h4 className="lg:text-xl text-lg lg:font-semibold font-medium">Order Total:</h4>
            <p className="text-xl font-semibold">
              $ {(total_price + shipping + tax).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
