import React from "react";

const Cart = ({ cart }) => {
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="col-span-1">
      <h2 className="text-xl font-semibold text-center mb-10">Order Summary</h2>
      <p className="text-lg font-medium mb-4">Total Quantity: {cart.length}</p>
      <p className="text-lg font-medium mb-4">Total Price: {total}</p>
      <p className="text-lg font-medium mb-4">Shipping: </p>
      <p className="text-lg font-medium mb-4">TAX: </p>
      <hr />
      <h2 className="text-lg font-medium mb-4">Subtotal: </h2>
    </div>
  );
};

export default Cart;
