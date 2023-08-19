import React from "react";
import useProductsApi from "../../hooks/useProductsApi";
import Product from "../product/Product";

const Products = () => {
  const products = useProductsApi();
  return (
    <div className="grid gap-3 mx-auto col-span-3 lg:grid-cols-3">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
