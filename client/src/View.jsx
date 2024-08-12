import React, { useState } from 'react';
import './View.css';
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

const items = [
  {
    id: 1,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc08193.jpg',
    title: 'Roar Decorative Accent',
    price: 1431,
  },
  {
    id: 2,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/2/2/22julbonemood_5_.jpg',
    title: 'Kadru Hand-Carved Bookmark',
    price: 260,
  },
  {
    id: 3,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/2/2/22julbonemood_7_.jpg',
    title: 'Hand-Carved Drongo Scissors',
    price: 799,
  },
  {
    id: 4,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/i/m/img_0293.jpg',
    title: 'Champa Key Hanger (3 hooks)',
    price: 2396,
  },
  {
    id: 5,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc09125.jpg',
    title: 'Ayaz Bowl',
    price: 1499,
  },
  {
    id: 6,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dscf1880.jpg',
    title: 'Contemporary Jaali Jewellery Box',
    price: 1696,
  },
  {
    id: 7,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc02109.jpg',
    title: 'Ulluk Madhubani Art ( 8" x 8" )',
    price: 556,
  },
  {
    id: 8,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dscf4348.jpg',
    title: 'Jaipur Blue Conch',
    price: 9696,
  },
  {
    id: 9,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/a01441fde58691fd2d38c1b8ed6a019d/d/s/dsc00327.jpg',
    title: 'Ageless Beauty Pashmina stole',
    price: 1888,
  },
  {
    id: 10,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc05106__1_.jpg',
    title: 'Finch Miniature Art ( 8in x 6in)',
    price: 1456,
  },
  {
    id: 11,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/o/v/oval_flower_ring.jpg',
    title: 'Cafune Labradorite Pendant',
    price: 799,
  },
  {
    id: 12,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc06602.jpg',
    title: 'Ender Curtain ( 7ft x 3.5ft )',
    price: 2000,
  }
];

const View = () => {
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
    <div>
      <Announcement />
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} onCartIconClick={handleCartIconClick} />
      <center><h1>CRAFTS</h1></center>
      <div className="aiyoo">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} className="item-image" />
            <h2 className="item-title">{item.title}</h2>
            <p className="item-price"> ₹ {item.price.toLocaleString()}</p>
            <button
              className="add-to-cart"
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

export default View;
