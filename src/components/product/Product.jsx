import React from "react";

const Product = ({ product }) => {
  const { picture, name, price } = product;
  return (
    <div className="border rounded-2xl text-center p-5">
      <img className="lg:w-64 h-72  mx-auto" src={picture} alt="" />
      <div className="my-8">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-lg">${price}</p>
      </div>
      <button className="border-2 rounded-lg px-5 py-2 hover:bg-black hover:text-white hover:duration-300">Buy Now</button>
    </div>
  );
};

export default Product;
