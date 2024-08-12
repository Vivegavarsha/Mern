import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Announcement.css';
import './Ho.css';
import Product from './Product';
import Listing from './Listing';
import Customer from './Customer';
import Footer from './Footer';
import Aboutus from './Aboutus';
import CartModal from './CartModal';
import Popup from './Popup';


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Indulge in the Splendour of Handcrafted Home Decor ',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/03/27/17/10/pottery-1283146_960_720.jpg',
      title: 'Discover Beautiful Pottery',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2020/11/05/13/42/wire-sculpture-5715170_1280.jpg',
      title: 'Exclusive Jewellery Collection',
    },
    {
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20220921/pngtree-earthenware-crockery-hand-crafted-crockery-handicraft-photo-image_19888098.jpg',
      title: 'Handmade Crockery Pots',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    
    <div>
      <div className="announcement-container">
        Super Deals! Free Shipping on Orders Over Rs.1500
      </div>

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
            <form className="navbar-search" onSubmit={handleSearchSubmit}>
              <input type="text" className="search-input" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
            </form>
            <FaUser className="navbar-icon" />
            <div className="navbar-cart" onClick={handleCartIconClick}>
              <FaShoppingCart className="navbar-icon" />
              <span className="cart-count">{cart.length}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="slider">
        <button className="prev" onClick={handlePrevSlide}>&#10094;</button>
        <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
          <div className="slide-content">
            <h2>{slides[currentSlide].title}</h2>
          </div>
        </div>
        <button className="next" onClick={handleNextSlide}>&#10095;</button>
      </div>
      <Product/>
      <Listing addToCart={addToCart} />
      <Customer />
      
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
    </div>
  );
};
export default Home
