import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../starRating/StarRating";

const Product = ({ product }) => {
  const { picture, name, price, _id, ratings, category } = product;
  return (
    <div>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="border col-span-1 rounded-2xl xl:p-3 lg:p-3 md:p-3 p-2"
      >
        <Link to={`/product/${_id}`}>
          <img
            className="2xl:h-56 object-cover mx-auto mb-5 md:rounded-lg rounded-md"
            src={picture}
            alt=""
          />
          <div className="flex justify-between md:gap-2">
            <div className="md:mb-1 mb-3">
              <h2 className="2xl:text-base xl:text-base text-sm">{name}</h2>
              <p className="text-xs capitalize text-left">{category}</p>
            </div>
            <div className=" md:block hidden">
            <StarRating ratings={ratings} />
            </div>
          </div>
          <div className="flex justify-between lg:mt-10 md:mt-5">
            <p className="lg:text-lg md:text-sm md:font-semibold font-medium">${price}</p>
            <button className="2xl:text-base lg:text-sm md:text-sm text-xs text-indigo-700 hover:duration-300">
              View Options
            </button>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Product;
