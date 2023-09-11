import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useCartContext } from "../../context/cartContext";

const CartIcon = () => {
    const {cart} = useCartContext([]);
  return (
    <div className="flex justify-center items-center relative cursor-pointer">
  <ShoppingCartIcon className="2xl:h-12 2xl:w-12 h-10 w-10 p-2 2xl:bottom-8 2xl:right-28 bottom-5 right-20 fixed border border-black bg-black text-white rounded-full z-50 drop-shadow-xl" />
  <div className={`fixed  2xl:bottom-14 2xl:right-28 bottom-11 right-20 bg-red-500 text-white rounded-full 2xl:w-6 2xl:h-6 w-4 h-4 text-center z-50 2xl:text-sm text-xs `}> 
    {cart.amount}
  </div>
</div>
  );
};

export default CartIcon;
