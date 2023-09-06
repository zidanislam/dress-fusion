import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/productContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const[product, setProduct] = useState({})
  const { products } = useProductsContext();
  useEffect(()=>{
    const selectedProduct = products.find((product) => product._id === productId);
    setProduct(selectedProduct)
  },[productId])
  console.log(product)
  const {name, price, description, sizes, category, gellary, ratings, reviews, stock} = product;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{category}</h2>
      <h2>${price}</h2>
    </div>
  );
};

export default ProductDetail;
