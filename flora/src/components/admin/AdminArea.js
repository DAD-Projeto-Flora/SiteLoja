import React, { useState, useEffect } from "react";
import "./AdminPage.css";
import SideBarAdmin from "./SideBarAdmin";
import ProductManager from "./ProductManager";
import ClientManager from "./ClientManager";

const AdminPage = () => {
  const [selectedSection, setSelectedSection] = useState("produtos");
  const [products_bd, setProducts] = useState([]);
  const [clients_bd, setClients] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  
    fetch("/api/clients")//nao sei colocar o coisa da API
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Erro ao carregar clientes:", err));
  }, []);
  
  return (
    <div className="profile-container">
      <div className="header-decoration"></div>
      <div className="admin-page-container">
      <SideBarAdmin onSelectSection={setSelectedSection} />
        <div className="admin-section-content">
          {selectedSection === "produtos" && (
            <div className="catalog-admin">
              <div className="catalog-admin-title"><h2>Área de gerenciamento de produtos</h2></div>
              <ProductManager products={products_bd} />
            </div>
          )}
          {selectedSection === "clientes" && (
            <div className="catalog-admin">
              <div className="catalog-admin-title"><h2>Área de gerenciamento de clientes</h2></div>
              
              <ClientManager clients={clients_bd} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
