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
        const fetchCartData = async () => {
            try {
                const responses = await Promise.all([
                    fetch('http://localhost:5000/gift'),
                    fetch('http://localhost:5000/handcraft'),
                    fetch('http://localhost:5000/jewel'),
                    fetch('http://localhost:5000/view'),
                    fetch('http://localhost:5000/decor')
                ]);

                const data = await Promise.all(responses.map(res => res.json()));

                // Combine the results from all APIs
                const combinedData = data.flat();

                // Filter the data to ensure each item has the required fields
                const filteredData = combinedData.filter(item => item.name && item.price && item.image);

                setCart(filteredData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCartData();
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
                <span>₹{cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</span>
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
