import React from 'react'
import './Read.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'; 


const Announcement = () => {
    return (
      <div className="announcement-container">
        Super Deals! Free Shipping on Orders Over Rs.1500
      </div>
    );
  };
const Navbar = () => {
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
            <li className="navbar-item"> <Link className="linkk" to="/Gift">GIFTING</Link></li>
          </ul>
          <div className="navbar-icons">
            <FaSearch className="navbar-icon" />
            <FaUser className="navbar-icon" />
            <div className="navbar-cart">
              <FaShoppingCart className="navbar-icon" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
const Read = () => {
  return (
    
    <div>
        <Announcement/>
        <Navbar/>
      <div className="about-us-container">
        <div className='img'>
          <img
            src="https://cdn.pixabay.com/photo/2019/02/26/14/53/handmade-4022208_1280.jpg"
            alt="no img" height={300} width={600}
          />
        </div>
        <div className="content">

          <h1>ABOUT US</h1>
          <p>
          Artisan Alley: The One-Stop Shopping Destination For Handicrafts
          The 21st century has seen a revolution in the way people shop thanks to e-commerce. Why would anyone roam from one store to another, when you have the option to get anything with just a single click? If you lived in the north and wanted to buy some exquisite handicrafts of India from the south, you surely wouldn’t visit the south just for one handicraft item. Here’s where Artisan Alley steps in and helps you out. With a single click, you can experience any craft product you want. Craft Maestros houses every craft product you can imagine, from trending Brass Engraving, Brass Casting, Wood Carving, and Miniature Paintings; to home furnishing options like cushion covers, and bed sheets. You name any craft, and you can stay assured you’ll find them here. For those of you with erratic working hours, Artisan Alley is your best bet. No matter what time of the day or night it is, you can shop whenever you want, even in your pajamas! You can shop online 24/7 at this one-stop shop!
          </p>
        </div>
      </div>
      <Footer/>
    </div>

    )
}

export default Read