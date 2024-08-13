import React, { useState, useEffect } from 'react';
import './Listing.css';

const Listing = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetch('http://localhost:5000/handcraft')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product-listing-page">
      <h1 className="page-title">Our Best Selling</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {product.isNew && <span className="new-badge">NEW</span>}
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            {product.isOutOfStock && <span className="out-of-stock">Out Of Stock</span>}
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">₹ {product.price}</p> {/* Format the price with ₹ */}
            <button 
              className="add-to-cart" 
              disabled={product.isOutOfStock}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
