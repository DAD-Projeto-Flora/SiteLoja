import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";
import Filter from "./Filter"; // Importar o componente Filter
import "./ProductCard.css";
import Order from "./Order";

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
  const [selectedCategories, setSelectedCategories] = useState([]); // Estado para categorias
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity }); // Estado para faixa de preço
  const query = useQuery();
  const searchTerm = query.get("search")?.toLowerCase() || "";
  const categoryId = query.get("categoryId");

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        let response;

        if (categoryId) {
          response = await fetch(`https://apilojaflora.onrender.com/product/getProductByCategory/${categoryId}`);
        } else {
          response = await fetch("/api/getProducts");
        }

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();

        const produtosOrdenados = (() => {
          if (orderBy === "destaque") {
            return data.sort((a, b) => b.notaAvaliacao - a.notaAvaliacao);
          } else if (orderBy === "maiorPreco") {
            return data.sort((a, b) => b.precoUnid - a.precoUnid);
          } else if (orderBy === "menorPreco") {
            return data.sort((a, b) => a.precoUnid - b.precoUnid);
          }
          return data;
        })();

        const produtosFormatados = produtosOrdenados.map((produto) => ({
          id: produto.id,
          nome: truncateText(produto.nome, 30),
          imagem: produto.urlImagem,
          preco: produto.precoUnid,
          avaliacao: produto.notaAvaliacao,
          categoria: produto.categoria, // Adicionar categoria
        }));
        setProdutos(produtosFormatados);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [categoryId, orderBy]); // Reexecutar quando categoryId ou orderBy mudar

  const produtosFiltrados = produtos
    .filter((produto) =>
      produto.nome.toLowerCase().includes(searchTerm)
    )
    .filter((produto) =>
      selectedCategories.length === 0 || selectedCategories.includes(produto.categoria)
    )
    .filter((produto) =>
      produto.preco >= priceRange.min && produto.preco <= priceRange.max
    );

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div>
      <Filter
        setSelectedCategories={setSelectedCategories}
        setPriceRange={setPriceRange}
      />
      <Order setOrderBy={setOrderBy} />
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