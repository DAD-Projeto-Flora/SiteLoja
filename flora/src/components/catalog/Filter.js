import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <aside className="filter-container">
      <div className="filter-title">
        <img src="/filter.svg" alt="Filtro" className="filter-icon" />
        <h3>Filtros</h3>
      </div>
      <div className="filter-opcoes">
        <h4>Por Categoria</h4>
        <div className="category-option">
          <label>Cabelo</label>
          <input type="checkbox" /> 
        </div>
        <div className="category-option">
          <label>Higiene pessoal</label>
          <input type="checkbox" /> 
        </div>
        <div className="category-option">
          <label>Casa</label>
          <input type="checkbox" /> 
        </div>
        <div className="category-option">
          <label>Controle de insetos</label>
          <input type="checkbox" /> 
        </div>
      </div>
      <hr></hr>
      <div className="filter-price">
        <h4>Por preço</h4>
        <div className="price-option">
          <input type="number"></input>
          <hr></hr>
          <input type="number"></input>
        </div>
        <button className="price-button">Aplicar</button>
      </div>
    </aside>
  );
};

export default Filter;