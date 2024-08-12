import React from "react";

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="summary-item">
        <span>Product Name</span>
        <span>$100.00</span>
      </div>
      <div className="summary-item">
        <span>Subtotal</span>
        <span>$100.00</span>
      </div>
      <div className="summary-item">
        <span>Shipping</span>
        <span>$10.00</span>
      </div>
      <div className="summary-item total">
        <span>Total</span>
        <span>$110.00</span>
      </div>
      <button className="checkout-button">Place Order</button>
    </div>
  );
};

export default OrderSummary;