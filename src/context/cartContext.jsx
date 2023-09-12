import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getCartData = () => {
  let localData = localStorage.getItem("dressFusionCart");
  if (localData.length === 0) {
    return [];
  } else {
    return JSON.parse(localData);
  }
};
const initialState = {
  cart: getCartData(),
  total_item: "",
  total_price: "",
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

  const handleDelete = (_id) => {
    dispatch({ type: "DELETE_ITEM", payload: _id });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_ITEM" });
    dispatch({ type: "CALCULATE_PRICE" });
    localStorage.setItem("dressFusionCart", JSON.stringify(state.cart));
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_DATA" });
  };

  const handleDecrease = (_id) => {
    dispatch({ type: "DECREASE", payload: _id });
  };
  const handleIncrease = (_id) => {
    dispatch({ type: "INCREASE", payload: _id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        handleDelete,
        clearCart,
        handleDecrease,
        handleIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

