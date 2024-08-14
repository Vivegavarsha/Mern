import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    useEffect(() => {
        // Load cart data from local storage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        setLoading(false); // No need to fetch from API as cart is already stored
    }, []);

    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleCheckout = () => {
        // Calculate the total amount in paise (100 paise = 1 Rupee)
        const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0) * 100;

        const options = {
            key: 'rzp_test_9u3kMcqchK88zT', // Replace with your Razorpay key
            amount: totalAmount,
            currency: 'INR',
            name: 'My Dummy Store',
            description: 'Test Transaction',
            handler: function (response) {
                alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
                setIsCheckoutModalOpen(false);
                // Optionally clear cart on successful payment
                localStorage.removeItem('cart');
                setCart([]);
            },
            prefill: {
                name: 'John Doe',
                email: 'john@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Dummy Store Address',
            },
            theme: {
                color: '#3399cc',
            },
            modal: {
                ondismiss: function () {
                    setIsCheckoutModalOpen(false);
                }
            }
        };

        const loadRazorpayScript = () => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                const rzp = new window.Razorpay(options);
                rzp.open();
            };
            script.onerror = () => {
                console.error('Failed to load Razorpay script');
            };
            document.body.appendChild(script);
        };

        loadRazorpayScript();
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
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
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
                </>
            )}

            {isCheckoutModalOpen && (
                <CheckoutModal cart={cart} onClose={closeCheckoutModal} />
            )}
        </div>
    );
};

export default Cart;
