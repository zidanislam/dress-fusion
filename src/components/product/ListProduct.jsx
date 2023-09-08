import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const ListProduct = ({ product, addToCart }) => {
  const { picture, name, price, _id, description } = product;
  return (
    <>
      <Link to={`/product/${_id}`}>
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="border flex gap-6 justify-start rounded-2xl p-3"
        >
          <img
            className="lg:w-72 h-60 object-cover"
            src={picture}
            alt=""
          />
          <div className="my-2">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm my-2 text-gray-800">{description}</p>
            <p className="text-lg">${price}</p>
          <button
            className="border-2 rounded-lg px-5 py-2 hover:bg-black hover:text-white hover:duration-300"
            onClick={() => addToCart(product)}
          >
            Buy Now
          </button>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default ListProduct;
