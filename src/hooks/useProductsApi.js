import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data);
      });
  }, []);

  console.log(products)
  return {products};
};

export default useProducts;
