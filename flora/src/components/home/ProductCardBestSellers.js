import React from "react";
import "./ProductCardBestSellers.css";

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
          ))}
        </div>
        <p className="product-price">R$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;