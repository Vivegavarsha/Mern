import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
                <span className="item-name">{item.title}</span>
                <span className="item-price">₹ {item.price}</span>
                <div className="item-quantity">
                    <button onClick={() => onDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrement(item.id)}>+</button>
                </div>
            </div>
            <button className="remove-button" onClick={() => onRemove(item.id)}> × </button>
        </div>
    );
};

export default CartItem;
