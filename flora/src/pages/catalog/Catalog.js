import React from "react";
import Filter from "../../components/catalog/Filter";
import Order from "../../components/catalog/Order";
import ProductsList from "../../components/catalog/ProductsList";
import "./Catalog.css";
import Header from "../../components/home/Header";

const Catalog = () => {
  return (
    <>
      <Header />
      <div className="catalogo-container">
      
        <div className="catalogo-conteudo">
          <ProductsList />
        </div>
      </div>
    </>
  );
};

export default Catalog;