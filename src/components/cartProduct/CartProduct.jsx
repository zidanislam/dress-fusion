import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartProduct = ({ picture, name, max, price, amount, selectedSize }) => {
  const [quantity, setQuantity] = useState(amount);
  const handleIncrease = () => {
    quantity < max ? setQuantity(quantity + 1) : setQuantity(max);
  };
  const handleDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };
  return (
    <div className="mx-auto grid lg:grid-cols-5 grid-cols-3 my-auto">
      <div className="flex gap-2 justify-start align-middle my-auto">
        <figure>
          <img src={picture} className="w-14" alt="" />
        </figure>
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <div className="flex text-sm gap-2">
            <p>Size: </p>
            <button
              disabled
              className="text-xs px-2 py-1 rounded text-white bg-black"
            >
              {selectedSize}
            </button>
          </div>
        </div>
      </div>
      <p className="text-center my-auto">{price}</p>
      <div className="flex justify-center gap-6 align-middle my-2">
        <button>
          <FaMinus
            className="text-xl my-auto text-gray-700"
            onClick={() => handleDecrease()}
          />
        </button>
        <div className="text-center border rounded-lg border-gray-300 h-12 w-20">
          <p className="text-xl mt-2">{quantity}</p>
        </div>
        <button>
          <FaPlus
            className="text-xl my-auto text-gray-700"
            onClick={() => handleIncrease()}
          />
        </button>
      </div>
      <p className="text-center my-auto">{price * amount}</p>
      <FaTrash className="m-auto text-red-700 "/>
    </div>
  );
};

export default CartProduct;
