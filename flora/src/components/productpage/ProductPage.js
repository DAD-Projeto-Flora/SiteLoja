import React from "react";
import { useLocation } from "react-router-dom"; // Importa o useLocation
import "./ProductPage.css";

const ProductPage = () => {
  const location = useLocation();
  const { produto } = location.state || {}; // Obtém o produto do estado

  if (!produto) {
    return <p>Produto não encontrado!</p>; // Caso o estado não seja passado
  }

  return (
    <div className="product-page">
      <div className="product-content">
        <img src={produto.imagem} alt={produto.nome} className="product-image-page" />
        <div className="product-details">
          <h2 className="text title-productpage">{produto.nome}</h2>
          <p className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < produto.avaliacao ? "star filled" : "star"}>★</span>
          ))}</p>
          <p className="price-productpage text">R$ {produto.preco}</p>
          <p className="category text"><span className="negrito">Categoria: </span>{produto.categoria}</p>
          <p className="desc text"><span className="negrito">Descrição: </span>{produto.descricao}</p>
          <button className="add-to-cart">Adicionar ao carrinho <span><img src="/carrinho.svg" alt="Flora Logo Folha" /></span></button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;