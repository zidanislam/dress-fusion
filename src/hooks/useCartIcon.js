import { useState } from "react";

const useCartIcon = (product) => {
  const [cart, setCart] = useState([]);

  const newCart = [...cart, product];
  setCart(newCart);
  return cart;
};

export default useCartIcon;
