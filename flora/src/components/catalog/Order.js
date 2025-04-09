import React from "react";
import "./Order.css";

const Order = ({ setOrderBy }) => {
  return (
    <div className="ordenacao-container">
      <p>Classificar por</p>
      <div className="buttons-order">
        <button
          className="ordenacao-botao ativo"
          onClick={() => setOrderBy("relevancia")}
        >
          Relevância
        </button>
        <button
          className="ordenacao-botao destaque"
          onClick={() => setOrderBy("destaque")}
        >
          Em destaque
        </button>
        <button className="ordenacao-botao" onClick={() => setOrderBy("menorPreco")}>Menor preço</button>
        <button className="ordenacao-botao" onClick={() => setOrderBy("maiorPreco")}>Maior preço</button>
        <button className="back-botao">
          <img src="/back-arrow.svg" alt="seta" />
        </button>
        <button className="next-botao">
          <img src="/arrow.svg" alt="seta" />
        </button>
      </div>
    </div>
  );
};

export default Order;