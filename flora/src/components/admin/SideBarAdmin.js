import React from "react";
import "./SideBarAdmin.css";

const SideBarAdmin = ({ onSelectSection }) => {
  return (
    <div className="side-bar-admin">
      <div className="sidebar-admin">
        <div className="admin-crud-menu">
          <button onClick={() => onSelectSection("produtos")}>Produtos</button>
          <button onClick={() => onSelectSection("clientes")}>Clientes</button>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;