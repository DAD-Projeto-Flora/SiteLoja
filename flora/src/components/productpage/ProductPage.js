import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importa o useParams
import "./ProductPage.css";
import { getProductById } from "../../autenticação/getProductsById";
import LoadingSpinner from "../catalog/LoadingSpinner"; // Importa o componente LoadingSpinner
import Header from "../home/Header"; // Importa o componente Header
import { useUser } from "../login/UserContext"; // import do contexto com carrinho


const ProductPage = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true); // Adiciona estado de carregamento
  const [error, setError] = useState(null); // Adiciona estado para erros
  const { addToCart } = useUser(); // hook do contexto

  const handleAddToCart = () => {
    const item = {
      image: produto.urlImagem,
      title: produto.nome,
      price: produto.precoUnid.toFixed(2),
    };
    addToCart(item);
  };

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const data = await getProductById(id); // Usa o ID correto
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
    return <LoadingSpinner />; // Exibe o spinner enquanto carrega
  }

  if (error) {
    return <p>Erro: {error}</p>; // Exibe mensagem de erro
  }

  if (!produto) {
    return <p>Produto não encontrado!</p>; // Exibe mensagem se o produto não for encontrado
  }

  return (
    <>
      <Header /> {/* Adiciona o componente Header */}
      <div className="product-page">
        <div className="product-content">
          <img src={produto.urlImagem} alt={produto.nome} className="product-image-page" />
          <div className="product-details">
            <h2 className="text title-productpage">{produto.nome}</h2>
            <p className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < Math.round(produto.notaAvaliacao) ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </p>
            <p className="price-productpage text">R$ {produto.precoUnid.toFixed(2)}</p>
            <p className="category text">
              <span className="negrito">Categoria: </span>{produto.categoria.nome}
            </p>
            <p className="desc text">
              <span className="negrito">Descrição: </span>{produto.descricao || "Sem descrição disponível."}
            </p>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Adicionar ao carrinho <span><img src="/carrinho.svg" alt="Flora Logo Folha" /></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;