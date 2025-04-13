import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa o useParams
import "./ProductPage.css";


const ProductPage = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true); // Adiciona estado de carregamento
  const [error, setError] = useState(null); // Adiciona estado para erros

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const data = await fetch("/api/getProductsById"+id); // Usa o ID correto
        console.log(data);
        setProduto(data); // Corrige para setProduto
        setLoading(false); // Define carregamento como concluído
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
        setError("Não foi possível carregar o produto."); // Define mensagem de erro
        setLoading(false); // Define carregamento como concluído
      }
    };

    if (id) fetchProduct(id); // Chama a função com o ID correto
  }, [id]); // Adiciona o ID como dependência

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