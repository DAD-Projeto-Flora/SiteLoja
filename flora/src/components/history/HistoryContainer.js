import React from "react";
import PurchaseHistory from './PurchaseHistory';
import "./HistoryContainer.css";


const HistoryContainer = ({ purchases }) => {
    return (
      <div className="history-container">
        <PurchaseHistory purchases={purchases} />
      </div>
    );
  };
  
export default HistoryContainer;