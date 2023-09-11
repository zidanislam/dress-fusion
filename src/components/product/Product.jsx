import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../starRating/StarRating";

const Product = ({ product}) => {
  const { picture, name, price, _id, ratings } = product;
  return (
    <div>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="border col-span-1 rounded-2xl text-center p-5"
      >
        <Link to={`/product/${_id}`}>
          <img
            className="lg:w-80 h-60 object-cover mx-auto"
            src={picture}
            alt=""
          />
          <div className="my-2">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-lg">${price}</p>
          </div>
          <div className="flex justify-center my-2">
            <StarRating ratings={ratings} />
          </div>
        </Link>
        <button className="border-2 rounded-lg px-5 py-2 hover:bg-black hover:text-white hover:duration-300">
          Buy Now
        </button>
      </motion.div>
    </div>
  );
};

export default Product;
