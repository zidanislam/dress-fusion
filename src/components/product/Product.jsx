import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  const { picture, name, price, _id } = product;
  return (
    <>
      <Link to={`/product/${_id}`}>
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="border rounded-2xl text-center p-5"
        >
          <img
            className="lg:w-80 h-60 object-cover mx-auto"
            src={picture}
            alt=""
          />
          <div className="my-8">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-lg">${price}</p>
          </div>
          <button
            className="border-2 rounded-lg px-5 py-2 hover:bg-black hover:text-white hover:duration-300"
            onClick={() => addToCart(product)}
          >
            Buy Now
          </button>
        </motion.div>
      </Link>
    </>
  );
};

export default Product;
