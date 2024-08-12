import React, { useState } from 'react';
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

const gef = [
    {
        id: 1,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc07735.jpg.jpg',
        title: 'Trail Blazer Jute Bag',
        price: 1568
    },
    {
        id: 2,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc04993.jpg',
        title: 'Midnight Craze Handbag',
        price: 2897
    },
    {
        id: 3,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc04928.jpg',
        title: 'Full Of Life Jute Tote',
        price: 1696
    },
    {
        id: 4,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/i/m/img_0166_1.jpg',
        title: 'Vihaga Hand-Carved Hairpin',
        price: 296
    },
    {
        id: 5,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/i/m/img_0170_2.jpg',
        title: 'Kamya Hand-Carved Hairpin',
        price: 235
    },
    {
        id: 6,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc00891.jpg',
        title: 'Shaandaar Kutch Weave Shawl',
        price: 696
    },
    {
        id: 7,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc07474_2.jpg',
        title: 'Jashn Kangan Set Of 2',
        price: 2578
    },
    {
        id: 8,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc05596_copy_1.jpg',
        title: 'Straight Collar Ajrakh Print Shirt',
        price: 598
    },
    {
        id: 9,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc08817.jpg',
        title: 'Gilded Memories Photo Frame',
        price: 999
    },
    {
        id: 10,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc09984_web.jpg',
        title: 'Delicate Blossom Marble Ashtray',
        price: 600
    },
    {
        id: 11,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dscf4700.jpg',
        title: 'Olive Mug',
        price: 250
    },
    {
        id: 12,
        image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc03030.jpg',
        title: 'Mens Muffler',
        price: 499
    }
];

const Gift = () => {
    const [cart, setCart] = useState([]); // Initialize cart state
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
        <div>
            <Announcement />
            <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} onCartIconClick={handleCartIconClick} />
            <center><h1>GIFTS </h1></center>

            <div className="hari">
                {gef.map(item => (
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
