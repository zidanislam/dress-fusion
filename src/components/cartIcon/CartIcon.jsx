import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";

const CartIcon = () => {
    // const cart = useCartIcon()
    
    
  return (
    <div className="flex justify-center items-center relative cursor-pointer">
  <ShoppingCartIcon className="h-10 w-10 p-2 bottom-5 right-20 fixed border border-black bg-black text-white rounded-full z-50 drop-shadow-xl" />
  <div className={`fixed bottom-11 right-20 bg-red-500 text-white rounded-full w-4 h-4 text-center z-50 text-xs `}> 
    {/* {cart.length} */}
  </div>
</div>
  );
};

export default CartIcon;
