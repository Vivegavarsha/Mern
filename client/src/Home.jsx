import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Announcement.css";
import "./Ho.css";
import Product from "./Product";
import Listing from "./Listing";
import Customer from "./Customer";
import Footer from "./Footer";
import Popup from "./Popup";
import CartModal from "./CartModal";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://raw.githubusercontent.com/465surya/car-image/main/pot.jpg",
      title: "Indulge in the Splendour of Handcrafted Home Decor",
    },
    {
      image: "https://media.craftmaestros.com/media/revslider/Mobile1.jpg",
      title: "Discover Beautiful Handmade Rugs",
    },
    {
      image:
        "https://raw.githubusercontent.com/465surya/car-image/main/Glass.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/465surya/car-image/main/Web.jpg",
      title: "Crafted Elegance Meets Timeless Design",
    },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/login/user");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
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
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Popup />
      <div className="announcement-container">
        Super Deals! Free Shipping on Orders Over Rs.1500
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link className="linkk" to="/Home">
              ARTISAN ALLEY
            </Link>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link className="linkk" to="/Read">
                ABOUT US
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="linkk" to="/View">
                CRAFTS
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="linkk" to="/Decor">
                HOME DECOR
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="linkk" to="/Jewel">
                JEWELLERY
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="linkk" to="/Gift">
                GIFTING
              </Link>
            </li>
          </ul>
          <div className="navbar-icons">
            <form className="navbar-search" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </form>
            <div className="navbar-user">
              <FaUser className="navbar-icon" />
              {user && <span className="user-name">{user.name}</span>}
            </div>
            <div className="navbar-cart" onClick={handleCartIconClick}>
              <FaShoppingCart className="navbar-icon" />
              <span className="cart-count">{cart.length}</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="slider">
        <button className="prev" onClick={handlePrevSlide}>
          &#10094;
        </button>
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="slide-content">
            <h2>{slides[currentSlide].title}</h2>
          </div>
        </div>
        <button className="next" onClick={handleNextSlide}>
          &#10095;
        </button>
      </div>
      <Product />
      <Listing addToCart={addToCart} searchQuery={searchQuery} />
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

export default Home;
