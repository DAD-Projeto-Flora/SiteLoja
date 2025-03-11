import React from "react";
import "./PurchaseHistory.css";

const PurchaseHistory = ({ orders }) => {
  return (
    <div className="purchase-history">
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <div className="order-header">
            <h3>{order.items.length > 1 ? "Produtos comprados" : "Produto comprado"}</h3>
            <span>Total do pedido: R$ {order.total.toFixed(2)}</span>
          </div>

          <div className={`order-items ${order.items.length > 1 ? "multiple-items" : "single-item"}`}>
            {order.items.map((item, idx) => (
              <div key={idx} className="item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p><strong>{item.name}</strong></p>
                  <p>Marca: {item.brand}</p>
                  <p>Quantidade: {item.quantity}x</p>
                  <p>Variação: {item.variation}</p>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                </div>
                <div>
                <button className="reorder-button">Comprar novamente</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseHistory;
