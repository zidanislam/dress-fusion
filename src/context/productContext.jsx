import { createContext, useContext, useEffect, useReducer } from "react";

const AllProducts = createContext();

const initialState = {
  isLoading: false,
  error: false,
  products: [],
  featured: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "calling-data":
      return {
        ...state,
        isLoading: true,
      };
    case "products-data":
      const featuredItem = action.payload.filter((product) => {
        return product.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        error: false,
        products: action.payload,
        featured: featuredItem,
      };
    case "fetching-error":
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

const AllProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "calling-data" });
    try {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "products-data", payload: data }));
    } catch (error) {
      dispatch({ type: "fetching-error" });
    }
  }, []);

  return (
    <AllProducts.Provider value={{ ...state }}>{children}</AllProducts.Provider>
  );
};

const useProductsContext = () => {
  return useContext(AllProducts);
};

export { AllProducts, AllProductsProvider, useProductsContext };

