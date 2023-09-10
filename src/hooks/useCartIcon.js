import { useState } from "react";

const useCartIcon = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return [cart, handleAddToCart];
};

export default useCartIcon;
