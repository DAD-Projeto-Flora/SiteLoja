import React from "react";
import "./ProductCard.css";

const ProductCard = ({ produto }) => {
  const renderStars = (avaliacao) => {
    const totalEstrelas = 5;
    const estrelasCheias = Math.floor(avaliacao); // Número inteiro de estrelas cheias
    const temMeiaEstrela = avaliacao % 1 !== 0; // Verifica se há parte decimal
    const estrelasVazias = totalEstrelas - estrelasCheias - (temMeiaEstrela ? 1 : 0); 
  
    return (
      <div className="estrelas">
        {Array.from({ length: estrelasCheias }, (_, index) => (
          <span key={`cheia-${index}`} className="estrela cheia">
            ★
          </span>
        ))}
        {temMeiaEstrela && (
          <span className="estrela meia">
            ★
          </span>
        )}
        {Array.from({ length: estrelasVazias }, (_, index) => (
          <span key={`vazia-${index}`} className="estrela vazia">
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