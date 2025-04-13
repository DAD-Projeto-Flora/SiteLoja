import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import { getProductById } from "../../autenticação/getProductsById";
import LoadingSpinner from "../catalog/LoadingSpinner";
import Header from "../home/Header";
import { useUser } from "../login/UserContext";


const ProductPage = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useUser();

  const handleAddToCart = () => {
    const item = {
      id: produto.id,
      image: produto.urlImagem,
      title: produto.nome,
      price: produto.precoUnid.toFixed(2),
    };
    addToCart(item);
  };

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const data = await getProductById(id);
        console.log(data);
        setProduto(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
        setError("Não foi possível carregar o produto.");
        setLoading(false);
      }
    };

    if (id) fetchProduct(id);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (!produto) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <>
      <Header />
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