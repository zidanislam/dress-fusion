import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  shipping: 3,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    name,
    stock,
    picture,
    price,
    _id,
    selectedSize,
    amount,
    product
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        name,
        stock,
        picture,
        price,
        _id,
        selectedSize,
        amount,
        product,
      },
    });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

