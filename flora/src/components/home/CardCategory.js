import React from "react";
import "./CardCategory.css";

const CardCategory = ({ image, title }) => {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="category-title text">{title}</h3>
    </div>
  );
};

export default CardCategory;
