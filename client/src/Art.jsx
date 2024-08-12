

import React, { useState } from 'react';
import './Cart.css';

const Art = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 1100; // Base price before tax
  const taxRate = 0.05; // Tax rate is 5%

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeItem = () => {
    setQuantity(0);
  };

  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="art-container">
      <h2>My Cart ({quantity})</h2>
      <div className="art-item">
        <img
          src="https://via.placeholder.com/100"
          alt="Ahmar Embroidered Cushion"
          className="art-item-image"
        />
        <div className="art-item-details">
          <h3>Ahmar Embroidered Cushion (16"x15")</h3>
          <p>₹ {subtotal.toLocaleString()}</p>
        </div>
        <div className="art-item-quantity">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className="art-item-remove" onClick={removeItem}>
          &times;
        </button>
      </div>
      <div className="art-summary">
        <h3>Cart Subtotal</h3>
        <p>Subtotal: ₹ {subtotal.toLocaleString()}</p>
        <p>Tax: ₹ {tax.toFixed(0)}</p>
        <p>Order Total Incl. Tax: ₹ {(subtotal + tax).toLocaleString()}</p>
        <p>Order Total Excl. Tax: ₹ {subtotal.toLocaleString()}</p>
      </div>
      <div className="art-actions">
        <button className="apply-discount">Apply Discount Code</button>
        <button className="proceed">PROCEED</button>
      </div>
    </div>
  );
};

export default Art;