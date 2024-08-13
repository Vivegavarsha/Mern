import React, { useState, useEffect } from 'react';
import './Gift.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Footer from './Footer';
import CartModal from './CartModal';

const Announcement = () => {
    return (
        <div className="announcement-container">
            Super Deals! Free Shipping on Orders Over Rs.1500
        </div>
    );
};

const Navbar = ({ cartCount, onCartIconClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo"><Link className="linkk" to="/Home">ARTISAN ALLEY</Link></div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link className="linkk" to="/Read">ABOUT US</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="linkk" to="/View">CRAFTS</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="linkk" to="/Decor">HOME DECOR</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="linkk" to="/Jewel">JEWELLERY</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="linkk" to="/Gift">GIFTING</Link>
                    </li>
                </ul>
                <div className="navbar-icons">
                    <FaSearch className="navbar-icon" />
                    <FaUser className="navbar-icon" />
                    <div className="navbar-cart" onClick={onCartIconClick}>
                        <FaShoppingCart className="navbar-icon" />
                        <span className="cart-count">{cartCount}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Gift = () => {
    const [gifts, setGifts] = useState([]); // Initialize state for gifts data
    const [cart, setCart] = useState([]); // Initialize cart state
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('http://localhost:5000/gift')
            .then((response) => response.json())
            .then((data) => setGifts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }

        // Show popup for 2 seconds
        setIsPopupVisible(true);
        setTimeout(() => {
            setIsPopupVisible(false);
        }, 2000);
    };

    const handleCartIconClick = () => {
        setIsCartModalOpen(true);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    const handleRemove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleIncrement = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecrement = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    return (
        <div>
            <Announcement />
            <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} onCartIconClick={handleCartIconClick} />
            <center><h1>GIFTS</h1></center>

            <div className="hari">
                {gifts.map(item => (
                    <div key={item.id} className="gef-card">
                        <img src={item.image} alt={item.title} className="gef-image" />
                        <h2 className="gef-title">{item.title}</h2>
                        <p className="gef-price">₹ {item.price.toLocaleString()}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => addToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Footer />

            {isCartModalOpen && (
                <CartModal
                    cart={cart}
                    onClose={closeCartModal}
                    handleRemove={handleRemove}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
            )}

            {isPopupVisible && (
                <div className="popup">
                    Item added to cart!
                </div>
            )}
        </div>
    );
};

export default Gift;
