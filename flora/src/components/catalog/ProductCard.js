import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ produto, customStyle }) => {
  const renderStars = (avaliacao) => {
    const totalEstrelas = 5;
    const estrelasCheias = Math.floor(avaliacao);
    const temMeiaEstrela = avaliacao % 1 !== 0;
    const estrelasVazias = totalEstrelas - estrelasCheias - (temMeiaEstrela ? 1 : 0); 

    return (
      <div className="estrelas">
        {Array.from({ length: estrelasCheias }, (_, index) => (
          <span key={`cheia-${index}`} className="estrela cheia">★</span>
        ))}
        {temMeiaEstrela && (
          <span className="estrela meia">★</span>
        )}
        {Array.from({ length: estrelasVazias }, (_, index) => (
          <span key={`vazia-${index}`} className="estrela vazia">★</span>
        ))}
      </div>
    );
  };

  return (
    <Link 
      to={{
        pathname: `/productpage/${produto.id}`,
        state: { produto },
      }} 
      className="link-sem-estilo"
    > 
      <div className="produto-card">
        <div className="img-produto">
          <img src={produto.imagem} alt={produto.nome} />
        </div>
        <h3 style={customStyle}>{produto.nome}</h3>
        {renderStars(produto.avaliacao)}
        <p style={customStyle}>R$ {produto.preco}</p>
      </div>
    </Link>
  );
};

export default ProductCard;