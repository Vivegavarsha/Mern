import React from 'react';
import './CartModal.css';
import CartItem from './CartItem';

const CartModal = ({ cart, onClose, handleRemove, handleIncrement, handleDecrement }) => {
    const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-modal">
            <div className="cart-modal-content">
                <span className="close-button" onClick={onClose}> × </span>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemove}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                        />
                    ))
                )}
                <div className="cart-subtotal">
                    <span>Cart Subtotal</span>
                    <span>₹ {cartSubtotal}</span>
                </div>
                <div className="cart-buttons">
                    <button className="view-cart">VIEW CART</button>
                    <button className="checkout">CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
