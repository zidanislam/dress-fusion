import React, { useState } from "react";
import useProducts from "../../hooks/useProductsApi";
import Product from "../product/Product";

const Shop = () => {
  const { products } = useProducts();
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="grid gap-3 mx-auto col-span-3 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
