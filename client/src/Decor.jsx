import React, { useState } from 'react';
import './Decor.css';
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
                <div className="navbar-logo">
                    <Link className="linkk" to="/Home">ARTISAN ALLEY</Link>
                </div>
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

const dec = [
    {
        id: 1,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc04936.jpg',
        title: 'Marble Candle Stand',
        price: 731
    },
    {
        id: 2,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc02250_1.jpg',
        title: 'Galatic Grace Table Lamp',
        price: 1760
    },
    {
        id: 3,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc08881.jpg',
        title: 'Regal Heritage Wall Clock',
        price: 1096
    },
    {
        id: 4,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc02512_3_3.jpg',
        title: 'Lady Candle Holder Brass',
        price: 3696
    },
    {
        id: 5,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc05008_1.jpg',
        title: 'Komal Glass Kangan',
        price: 796
    },
    {
        id: 6,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/a01441fde58691fd2d38c1b8ed6a019d/d/s/dsc01704.jpg',
        title: 'Handmade Desk Organizer with clock',
        price: 1000
    },
    {
        id: 7,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc08766.jpg',
        title: 'Silver Waves Napkin Ring',
        price: 1968
    },
    {
        id: 8,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc00580_1_3.jpg',
        title: 'Ignis Wine Glass',
        price: 1960
    },
    {
        id: 9,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc02368.jpg',
        title: 'Artsy Multi-Colored Tray Table (Foldable)',
        price: 2400
    },
    {
        id: 10,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc02332.jpg',
        title: 'Tea For Two (Set of 2 cups + tray)',
        price: 1599
    },
    {
        id: 11,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc02209.jpg',
        title: 'Dusk To Dawn Vase',
        price: 2796
    },
    {
        id: 12,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc06705_1.jpg',
        title: 'Circular Wooden platter',
        price: 1696
    }
];

const Decor = () => {
    const [cart, setCart] = useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false); // State to manage the visibility of the pop-up

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }

        // Show the pop-up when an item is added to the cart
        setIsPopupVisible(true);
        setTimeout(() => {
            setIsPopupVisible(false); // Hide the pop-up after 2 seconds
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
        <div className='gaga'>
            <Announcement />
            <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} onCartIconClick={handleCartIconClick} />
            <center><h1>HOME DECOR</h1></center>
            <div className="gugu">
                {dec.map((item) => (
                    <div key={item.id} className="dec-card">
                        <img src={item.image} alt={item.title} className="dec-image" />
                        <h2 className="dec-title">{item.title}</h2>
                        <p className="dec-price">₹ {item.price.toLocaleString()}</p>
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

export default Decor;
