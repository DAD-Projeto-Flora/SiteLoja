import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa o useParams
import "./ProductPage.css";
import { getProductById } from "../../autenticação/getProductsById"; // Importe a função de busca

const ProductPage = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    // Busca o produto pelo ID
    const fetchProduct = async () => {
      try {
        const produtoEncontrado = await getProductById(id);
        setProduto(produtoEncontrado);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!produto) {
    return <p>Produto não encontrado!</p>; // Exibe mensagem enquanto o produto não é carregado
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