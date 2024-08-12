import React, { useState } from 'react';
import './Jewel.css';
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

const jew = [
  {
    id: 1,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc00582_2.jpg',
    title: 'Mawali Brass Earrings',
    price: 531
  },
  {
    id: 2,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc07972.jpg',
    title: 'Tijara Brass Earrings',
    price: 760
  },
  {
    id: 3,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/1/_/1_54_.jpg',
    title: 'Phagi Kundan Earrings',
    price: 796
  },
  {
    id: 4,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/i/m/img_0585.jpg',
    title: 'Peelo Dangling Earing',
    price: 435
  },
  {
    id: 5,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/i/m/img_0561.jpg',
    title: 'Harita Beaded Necklace',
    price: 890
  },
  {
    id: 6,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dscf1673.jpg',
    title: 'Black Jade Necklace',
    price: 1566
  },
  {
    id: 7,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dscf5049_2.jpg',
    title: 'Emerald Pearl Necklace',
    price: 2696
  },
  {
    id: 8,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dscf5040_2.jpg',
    title: 'Pearl Studded Necklace',
    price: 2344
  },
  {
    id: 9,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc05079.jpg',
    title: '‘Mohana’ Glass Kangan',
    price: 896
  },
  {
    id: 10,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/d/s/dsc02494_1_2.jpg',
    title: '‘Komal’ Glass Kangan -2-6 ( Diameter- 2.75" )',
    price: 456
  },
  {
    id: 11,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/b/l/black_0009_1_3_3.jpg',
    title: 'Kashish Kangan-Black-2-2 ( Diameter- 2.3" )',
    price: 346
  },
  {
    id: 12,
    image: 'https://media.craftmaestros.com/media/catalog/product/cache/fe834c792f2ec5867e0c548986796f72/i/m/img_0094.jpg',
    title: 'Kalon Labradorite Pendant',
    price: 3767
  }
];

const Jewel = () => {
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
      <center><h1>JEWELLERY</h1></center>
      <div className="gow">
        {jew.map(item => (
          <div key={item.id} className="jew-card">
            <img src={item.image} alt={item.title} className="jew-image" />
            <h2 className="jew-title">{item.title}</h2>
            <p className="jew-price">₹ {item.price.toLocaleString()}</p>
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

export default Jewel;
