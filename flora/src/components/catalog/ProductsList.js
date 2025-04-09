import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner"; // Importação do spinner
import "./ProductCard.css";
import Order from "./Order"; // Importar o componente Order

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const ProductsList = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderBy, setOrderBy] = useState("relevancia");
  const query = useQuery();
  const searchTerm = query.get("search")?.toLowerCase() || "";

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const response = await fetch("/product/getProducts"); // Endpoint genérico para todos os produtos
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        const data = await response.json();
  
        // Ordenar os produtos com base no campo notaAvaliacao se orderBy for "destaque"
        const produtosOrdenados = (() => {
          if (orderBy === "destaque") {
            return data.sort((a, b) => b.notaAvaliacao - a.notaAvaliacao);
          } else if (orderBy === "maiorPreco") {
            return data.sort((a, b) => b.precoUnid - a.precoUnid);
          } else if (orderBy === "menorPreco") {
            return data.sort((a, b) => a.precoUnid - b.precoUnid);
          }
          return data; // Padrão: sem ordenação específica
        })();
        
  
        const produtosFormatados = produtosOrdenados.map((produto) => ({
          id: produto.id,
          nome: truncateText(produto.nome, 30),
          imagem: produto.urlImagem,
          preco: produto.precoUnid.toFixed(2).replace(".", ","),
          avaliacao: produto.notaAvaliacao, 
        }));
        setProdutos(produtosFormatados);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProdutos();
  }, [orderBy]); 

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      <Order setOrderBy={setOrderBy} /> {/* Adicionar o componente Order */}
      <div className="lista-produtos">
        {produtosFiltrados.length > 0 ? (
          <div className="grid-container">
            {produtosFiltrados.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <p>Nenhum produto encontrado para "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;