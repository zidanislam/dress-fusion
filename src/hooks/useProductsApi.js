import { useEffect, useState } from "react";

const useProductsApi = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json"
    )
    .then((res) => res.json())
    .then(data=> setProducts(data))
  }, []);

  return (products);
};

export default useProductsApi;
