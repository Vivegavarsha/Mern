import React, { useState, useEffect } from 'react';
import './Popup.css'; // Importing the CSS file

function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Set a timeout to show the popup after 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Own a Piece of Craft!</h2>
            <p>Order now and get 10% OFF on your 1st order.</p>
            <p>Moreover, would you like to receive updates on matters of craft & craftsmanship and new product launches, discounts, and events? Then enter your email address below and hit subscribe.</p>
            <input type="email" placeholder="Enter your email address" />
            <button className="subscribe-btn">SUBSCRIBE</button>
            <button className="close-btn" onClick={closePopup}>×</button>
            <a href="#" className="already-subscribed">Thank you, I already subscribed.</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;