import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa o useParams
import "./ProductPage.css";

const ProductPage = () => {
  const id  = 1; // Obtém o ID do produto da URL
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true); // Adiciona estado de carregamento
  const [error, setError] = useState(null); // Adiciona estado para erros

  useEffect(() => {
    // Busca o produto pelo ID
    const fetchProduct = async (id) => {
      try {
        setLoading(true);
        const response = await fetch(`https://apilojaflora.onrender.com/product/getProduct/`+id);
        console.log(response);
        if (!response.ok) {
          throw new Error("Erro ao buscar o produto: " + response.statusText);
        }
        setProduto(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>; // Exibe mensagem enquanto carrega
  }

  if (error) {
    return <p>Erro: {error}</p>; // Exibe mensagem de erro
  }

  if (!produto) {
    return <p>Produto não encontrado!</p>; // Exibe mensagem se o produto não for encontrado
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
            ))}
          </p>
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