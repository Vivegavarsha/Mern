import React from "react";
import ShippingInfo from "./ShippingInfo";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import "./Checkout.css";

const Checkout = ({ cart }) => {
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-content">
        <div className="left-column">
          <ShippingInfo />
          <Payment />
        </div>
        <div className="right-column">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
