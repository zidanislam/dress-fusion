const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { name, stock, picture, price, _id, selectedSize, amount, product } =
      action.payload;

    let existingProduct = state.cart.find(
      (product) => product._id === _id + selectedSize
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((product) => {
        if (product._id === _id + selectedSize) {
          let newAmount = product.amount + amount;
          if (newAmount > product.max) {
            newAmount = product.max;
          }
          return {
            ...product,
            amount: newAmount,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        _id: _id + selectedSize,
        picture: picture,
        amount: amount,
        name: name,
        max: stock,
        price: price,
        selectedSize: selectedSize,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "DECREASE") {
    let updatedProduct = state.cart.map((product) => {
      if (product._id === action.payload) {
        let decAmount = product.amount - 1;
        if (decAmount < 0) {
          decAmount = 1;
        }
        return {
          ...product,
          amount: decAmount,
        };
      } else {
        return product;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "INCREASE") {
    let updatedProduct = state.cart.map((product) => {
      if (product._id === action.payload) {
        let incAmount = product.amount + 1;
        if (incAmount > product.max) {
          incAmount = product.max;
        }
        return {
          ...product,
          amount: incAmount,
        };
      } else {
        return product;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "DELETE_ITEM") {
    let updatedCart = state.cart.filter((item) => item._id !== action.payload);

    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CLEAR_DATA") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "TOTAL_ITEM") {
    let cartValue = state.cart.reduce((initVal, currVal) => {
      let { amount } = currVal;
      initVal = initVal + amount;
      return initVal;
    }, 0);
    return {
      ...state,
      total_item: cartValue,
    };
  }
  return state;
};

export default cartReducer;
