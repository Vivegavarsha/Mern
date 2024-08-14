import React, { useState, useEffect } from 'react';
import './Listing.css';

const Listing = ({ addToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
        setFilteredProducts(data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter products based on the search query
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }
  }, [searchQuery, products]);

  const handleAddToCart = (product) => {
    addToCart(product);

    // Show the pop-up when an item is added to the cart
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false); // Hide the pop-up after 2 seconds
    }, 2000);
  };

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
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            {product.isNew && <span className="new-badge">NEW</span>}
            <img src={product.image} alt={product.title} className="product-image" />
            {product.isOutOfStock && <span className="out-of-stock">Out Of Stock</span>}
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">₹ {product.price}</p>
            <button 
              className="add-to-cart" 
              disabled={product.isOutOfStock}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <div className="popup">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Listing;
