import React from "react";

const Cart = () => {
  return (
    <div className="col-span-1">
      <h2 className="text-xl font-semibold text-center mb-10">Order Summary</h2>
      <p className="text-lg font-medium mb-4">Total Quantity:</p>
      <p className="text-lg font-medium mb-4">Total Price: </p>
      <p className="text-lg font-medium mb-4">Shipping: </p>
      <p className="text-lg font-medium mb-4">TAX: </p>
      <hr />
      <h2 className="text-lg font-medium mb-4">Subtotal: </h2>
    </div>
  );
};

export default Cart;
