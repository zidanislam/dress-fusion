import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cartContext";

const CartProduct = ({
  _id,
  picture,
  name,
  max,
  price,
  amount,
  selectedSize,
}) => {
  const { handleDelete, handleDecrease, handleIncrease } = useCartContext();

  return (
    <>
      <div className="mx-auto grid lg:grid-cols-5 grid-cols-3 my-5">
        <div className="flex gap-2 justify-start align-middle my-auto">
          <figure className="w-14 my-auto">
            <img src={picture} alt="" />
          </figure>
          <div>
            <p className="md:text-base text-sm md:font-semibold font-medium">{name}</p>
            <div className="flex text-sm gap-2">
              <p>Size: </p>
              <button
                disabled
                className="text-xs md:px-2 md:py-1 px-1.5 py-0.5 rounded text-white bg-black"
              >
                {selectedSize}
              </button>
            </div>
          </div>
        </div>
        <p className="text-center my-auto lg:block hidden">{price}</p>
        <div className="flex justify-center md:gap-6 gap-2 align-middle my-auto">
          <button>
            <FaMinus
              className="md:text-lg text-sm my-auto text-gray-700"
              onClick={() => handleDecrease(_id)}
            />
          </button>
          <div className="text-center border rounded-lg border-gray-300 md:h-12 md:w-20 h-10 w-12">
            <p className="md:text-lg text-sm mt-2">{amount}</p>
          </div>
          <button>
            <FaPlus
              className="md:text-lg text-sm my-auto text-gray-700"
              onClick={() => handleIncrease(_id)}
            />
          </button>
        </div>
        <p className="text-center my-auto lg:block hidden">
          {(price * amount).toFixed(2)}
        </p>
        <FaTrash
          type="button"
          onClick={() => handleDelete(_id)}
          className="m-auto text-red-700 cursor-pointer"
        />
      </div>
      <hr />
    </>
  );
};

export default CartProduct;
