import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ setSelectedCategories, setPriceRange }) => {
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleCategoryChange = (category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const applyFilters = () => {
    setSelectedCategories(categories);
    setPriceRange({
      min: minPrice ? parseFloat(minPrice) : 0,
      max: maxPrice ? parseFloat(maxPrice) : Infinity,
    });
  };

  return (
    <aside className="filter-container">
      <div className="filter-title">
        <img src="/filter.svg" alt="Filtro" className="filter-icon" />
        <h3>Filtros</h3>
      </div>
      <div className="filter-opcoes">
        <h4>Por Categoria</h4>
        <div className="category-option">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange("Cabelo")}
            />
            Cabelo
          </label>
        </div>
        <div className="category-option">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange("Higiene pessoal")}
            />
            Higiene pessoal
          </label>
        </div>
        <div className="category-option">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange("Casa")}
            />
            Casa
          </label>
        </div>
        <div className="category-option">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCategoryChange("Controle de insetos")}
            />
            Controle de insetos
          </label>
        </div>
      </div>
      <hr />
      <div className="filter-price">
        <h4>Por preço</h4>
        <div className="price-option">
          <input
            type="number"
            placeholder="Mínimo"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <hr />
          <input
            type="number"
            placeholder="Máximo"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button className="price-button" onClick={applyFilters}>
          Aplicar
        </button>
      </div>
    </aside>
  );
};

export default Filter;