import React from 'react';
import './CheckoutModal.css';
import Checkout from './Checkout';

const CheckoutModal = ({ cart, onClose }) => {
  return (
    <div className="checkout-modal">
      <div className="checkout-modal-content">
        <span className="close-button" onClick={onClose}> × </span>
        <Checkout cart={cart} />
      </div>
    </div>
  );
};

export default CheckoutModal;
