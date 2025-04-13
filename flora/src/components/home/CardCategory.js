import React from "react";
import "./CardCategory.css";

const CardCategory = ({ image, title, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="category-title text">{title}</h3>
    </div>
  );
};

export default CardCategory;
