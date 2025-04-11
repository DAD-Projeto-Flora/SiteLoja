import React from "react";
import "./PurchaseHistory.css";
import HistoryCard from "./HistoryCard";

const PurchaseHistory = ({ purchases = []}) => {

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

export default PurchaseHistory;