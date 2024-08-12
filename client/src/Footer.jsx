import React from 'react';
import './Footer.css';
import vs from "./assets/visa.png";
import gp from "./assets/gpay.png";
import ms from "./assets/mastercard.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="stay-connected">
        <div className="stay-connected-content">
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3H22V21H2V3Z" stroke="#8D3841" strokeWidth="2"/>
              <path d="M2 3L12 13L22 3" stroke="#8D3841" strokeWidth="2"/>
            </svg>
          </div>
          <div className="stay-connected-text">
            <h3>Stay Connected</h3>
            <p>Receive email updates on matters of craft and craftsmanship plus new product launches, discounts, and events.</p>
          </div>
          <div className="email-subscribe">
            <input type="email" placeholder="Your email address..." />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>About us</li>
            <li>Crafts</li>
            <li>Home Decor</li>
            <li>Jewellery</li>
            <li>Gifting</li>
          </ul>
        </div>
        <div className="browse-products">
          <h4>Browse Products By</h4>
          <ul>
            <li>Recommendations</li>
            <li>Gift Items</li>
            <li>New Arrivals</li>
            <li>Hand Painted Crafts</li>
            <li>Best Sellers</li>

          </ul>
        </div>
        <div className="customer-service">
          <h4>Customer Service</h4>
          <ul>
            <li>Track Order</li>
            <li>Shipping & Payments</li>
            <li>Return & Exchanges</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="craft-maestros">
          <h4>Artisan Alley</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <p>Time Square, Block B, Sector 43, RS Puram, Coimbatore - 641 018</p>
          <p>+91 8904307447</p>
          <p>artisanalley@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferer'>Facebook</a>
          <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferer'>Instagram</a>
          <a href="https://twitter.com/?lang=en" target='_blank' rel='noopener noreferer'>Twitter</a>
        </div>
        <div className="payments">
          <img src={vs} alt="Visa" width="25" height="25"/>
          <img src={ms} alt="Mastercard" width="25" height="25"/>
          <img src={gp} alt="Gpay" width="25" height="25"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
