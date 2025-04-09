import React from "react";
import "./ProductCardNormal.css";

const ProductCardNormal = ({ image, title, price, rating }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title-normal">{title}</h3>
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
          ))}
        </div>
        <p className="product-price-normal">R$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCardNormal;