import React from "react";
import "./PurchaseHistory.css"; // Importa o arquivo de estilos
import HistoryCard from "./HistoryCard";

const PurchaseHistory = ({ name, email, image }) => {
  const purchases = [
    { 
      date: '2025-02-01', 
      items: [
        { img: "https://www.w3schools.com/howto/img_avatar2.png", name: 'Camiseta', price: 29.99, brand: 'Nike', qnt: 1 }, 
        { name: 'Boné', price: 19.99 }
      ]
    },
    { 
      date: '2025-02-10', 
      items: [
        { name: 'Tênis', price: 79.99 }
      ] 
    },
    { 
      date: '2025-02-15', 
      items: [
        { name: 'Jaqueta', price: 120.00 }, 
        { name: 'Calça', price: 89.90 }
      ] 
    }
  ];

  const purchasesWithTotal = purchases.map(purchase => ({
    ...purchase,
    price_total: purchase.items.reduce((sum, item) => sum + (item.price || 0), 0)
  }));

  return (
    <div className="profile-container">
      <div className="header-decoration"></div>
      
      <HistoryCard purchases={purchasesWithTotal} />
    </div>
  );
};

export default PurchaseHistory; // Exporta o componente