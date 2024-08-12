import React from 'react';
import './Product.css';

const crafts = [
  {
    id: 1,
    title: "Hand Painted Vases",
    description: "A beautifully hand-painted vase with intricate designs.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69JWz9h6rjl8fA39L3UJZ81lIhUWzafhuDw&s",
  },
  {
    id: 2,
    title: "Hand Painted Plates",
    description: "A unique hand-painted plate perfect for home decor.",
    imageUrl: "https://exclusivelane.com/cdn/shop/products/el-005-464_a.jpg?v=1570516055",
  },
  {
    id: 3,
    title: "Hand Painted Teapots",
    description: "A unique hand-painted tea-pot perfect for home decor.",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/5/307750004/BT/NO/OG/182214468/rk-tea-13-500x500.jpg",
  },
  {
    id: 4,
    title: "Hand Embroidered Wall Art",
    description: "A unique hand-embroidered floral wall art for home decor.",
    imageUrl: "https://i0.wp.com/indha.in/wp-content/uploads/2021/09/Wall-Decore-Smart-N-Embo-e1653376357211.jpg?fit=1000%2C1000&ssl=1",
  },
];

const Product = ({ addToCart }) => {
  return (
    <div className="hand-painted-page">
      <header className="header">
        <h1>Hand Painted Crafts</h1>
      </header>
      <main className="craft-list">
        {crafts.map((craft) => (
          <div key={craft.id} className="craft-card">
            <img src={craft.imageUrl} alt={craft.title} className="craft-image" />
            <h2 className="craft-title">{craft.title}</h2>
            <p className="craft-description">{craft.description}</p>
            
          </div>
        ))}
      </main>
    </div>
  );
};

export default Product;
