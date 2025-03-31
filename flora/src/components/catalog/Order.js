import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <div className="ordenacao-container">
    <p>Classificar por</p>
      <div className="buttons-order">
        <button className="ordenacao-botao ativo">Relevância</button>
        <button className="ordenacao-botao">Mais recente</button>
        <button className="ordenacao-botao">Em destaque</button>
        <button className="ordenacao-botao">Preço</button>
        <button className="back-botao"><img src="/back-arrow.svg" alt="seta" /></button>
        <button className="next-botao"><img src="/arrow.svg" alt="seta" /></button>
      </div>
    </div>
  );
};

export default Order;