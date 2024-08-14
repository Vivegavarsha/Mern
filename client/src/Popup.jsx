import React, { useState, useEffect } from 'react';
import './Popup.css'; 

function Popup() {
  const [showPopup, setShowPopup] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubscribe = () => {
    // Show confirmation message when the subscribe button is clicked
    setShowConfirmation(true);

    // Hide the confirmation message after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
      setShowPopup(false); // Close the main popup as well
    }, 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="poop">
          <div className="poop-content">
            <h2>Own a Piece of Craft!</h2>
            <p>Order now and get 10% OFF on your 1st order.</p>
            <p>Moreover, would you like to receive updates on matters of craft & craftsmanship and new product launches, discounts, and events? Then enter your email address below and hit subscribe.</p>
            <input type="email" placeholder="Enter your email address" />
            <button className="subs-btn" onClick={handleSubscribe}>SUBSCRIBE</button>
            <button className="cls-butn" onClick={closePopup}>×</button>
            <a href="/Read" className="already-subs">Thank you, I already subscribed.</a>
          </div>
        </div>
      )}
      
      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-content">
            <p>Subscription added! Thank you for subscribing.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
