import React from "react";
import "./ProductPage.css";

const ProductPage = ({ image, title, price, rating, desc, category }) => {
  return (
    <div className="product-page">
      <div className="product-content">
        <img src={image} alt={title} className="product-image-page" />
        <div className="product-details">
          <h2 className="text title-productpage">{title}</h2>
          <p className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
          ))}</p>
          <p className="price-productpage text">{price}</p>
          <p className="category text"><span className="negrito">Categoria: </span>{category}</p>
          <p className="desc text"><span className="negrito">Descrição: </span>{desc}</p>
          <button className="add-to-cart">Adicionar ao carrinho <span><img src="/carrinho.svg" alt="Flora Logo Folha" /></span></button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
