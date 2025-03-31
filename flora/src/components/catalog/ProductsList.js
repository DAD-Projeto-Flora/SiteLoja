import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const produtos = [
  { id: 1, nome: "Neutrox Creme", imagem: "/Neutrox.svg", preco: "12,90" },
  { id: 2, nome: "Shampoo Seda", imagem: "/Neutrox.svg", preco: "15,90" },
  { id: 3, nome: "Condicionador OX", imagem: "/Neutrox.svg", preco: "18,50" },
  { id: 4, nome: "Sabonete Dove", imagem: "/Neutrox.svg", preco: "8,90" },
  { id: 5, nome: "Creme Nívea", imagem: "/Neutrox.svg", preco: "22,50" },
  { id: 6, nome: "Gel Fixador", imagem: "/Neutrox.svg", preco: "14,00" },
  { id: 7, nome: "Desodorante Rexona", imagem: "/Neutrox.svg", preco: "20,00" },
  { id: 8, nome: "Creme Dental Colgate", imagem: "/colgate.svg", preco: "5,50" },
  { id: 9, nome: "Protetor Solar L'Oreal", imagem: "/loreal.svg", preco: "35,00" },
  { id: 10, nome: "Perfume Natura", imagem: "/natura.svg", preco: "99,90" },
  { id: 11, nome: "Máscara de Cílios Maybelline", imagem: "/maybelline.svg", preco: "45,00" },
  { id: 12, nome: "Base Vult", imagem: "/vult.svg", preco: "30,00" },
  { id: 13, nome: "Batom MAC", imagem: "/mac.svg", preco: "80,00" },
  { id: 14, nome: "Esmalte Risqué", imagem: "/risque.svg", preco: "7,50" },
  { id: 15, nome: "Pó Compacto Avon", imagem: "/avon.svg", preco: "25,00" },
  { id: 16, nome: "Lápis de Olho Dailus", imagem: "/dailus.svg", preco: "12,00" },
  { id: 17, nome: "Sombra Quem Disse Berenice", imagem: "/berenice.svg", preco: "20,00" },
  { id: 18, nome: "Iluminador Bruna Tavares", imagem: "/bruna.svg", preco: "50,00" },
  { id: 19, nome: "Paleta de Sombras Urban Decay", imagem: "/urbanDecay.svg", preco: "150,00" },
  { id: 20, nome: "Pincel de Maquiagem Macrilan", imagem: "/macrilan.svg", preco: "35,00" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductsList = () => {
  const query = useQuery();
  const searchTerm = query.get("search")?.toLowerCase() || "";

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm)
  );

  return (
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
  );
};

export default ProductsList;
