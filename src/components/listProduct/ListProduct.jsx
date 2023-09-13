import { motion } from "framer-motion";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
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
          className="border flex md:gap-6 gap-3 justify-start lg:rounded-2xl md:rounded-lg rounded-md md:p-3 px-2 py-1.5 "
        >
          <img
            className="lg:w-72 lg:h-60 md:w-52 md:h-48 w-44 h-32 object-cover my-auto flex align-middle  md:rounded-lg rounded-md"
            src={picture}
            alt=""
          />
          <div className="md:my-2 my-1 flex flex-col">
            <h2 className="md:text-xl md:font-semibold text-sm font-medium">{name}</h2>
            <LinesEllipsis
              text={description}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
              className="md:text-sm text-xs my-2 text-gray-800"
            />
            <p className="text-lg">${price}</p>
            <div>
              <button className="2xl:text-base lg:text-sm text-xs text-indigo-700 hover:duration-300">
                View Options
              </button>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default ListProduct;
