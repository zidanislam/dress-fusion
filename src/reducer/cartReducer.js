const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { name, stock, picture, price, _id, selectedSize, amount, product } =
      action.payload;

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
  return state;
};

export default cartReducer;
