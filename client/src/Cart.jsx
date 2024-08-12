import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import CheckoutModal from './CheckoutModal';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/handcraft')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.name && item.price && item.image);
                setCart(filteredData);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleCheckout = () => {
        setIsCheckoutModalOpen(true);
    };

    const closeCheckoutModal = () => {
        setIsCheckoutModalOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data</div>;
    }

    return (
        <div className="cart">
            <h2>{cart.length} Item(s) in Cart</h2>
            {cart.map(item => (
                <CartItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
            <div className="cart-subtotal">
                <span>Cart Subtotal</span>
                <span>₹{cart.reduce((total, item) => total + item.price, 0)}</span>
            </div>
            <div className="cart-buttons">
                <button className="view-cart">VIEW CART</button>
                <button onClick={handleCheckout} className="checkout">CHECKOUT</button>
            </div>

            {isCheckoutModalOpen && (
                <CheckoutModal cart={cart} onClose={closeCheckoutModal} />
            )}
        </div>
    );
};

export default Cart;
