import React from "react";
import "./ProductCard.css";

const ProductCard = ({ produto }) => {
  const renderStars = (avaliacao) => {
    const totalEstrelas = 5;
    return (
      <div className="estrelas">
        {Array.from({ length: totalEstrelas }, (_, index) => (
          <span key={index} className={index < avaliacao ? "estrela cheia" : "estrela vazia"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="produto-card">
      <div className="img-produto"><img src={produto.imagem} alt={produto.nome} /></div>
      <h3>{produto.nome}</h3>
      {renderStars(produto.avaliacao)}
      <p>R$ {produto.preco}</p>
    </div>
  );
};

export default ProductCard;