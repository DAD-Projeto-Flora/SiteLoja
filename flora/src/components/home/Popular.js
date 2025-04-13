import React, { useEffect, useState } from "react";
import ProductCard from "../catalog/ProductCard"; // Atualiza a importação para ProductCard
import "./Popular.css";

const Popular = () => {
    const [products, setProducts] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        fetch("https://apilojaflora.onrender.com/product/getProducts")
            .then(response => response.json())
            .then(data => {
                const popularProducts = data.slice(0, 4);
                setProducts(popularProducts);

                const shuffledProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);
                setRandomProducts(shuffledProducts);
            })
            .catch(error => {
                console.error("Erro ao buscar os produtos:", error);
            });
    }, []);

    return (
        <div className='popular'>
          <h2 className="text">Popular nas lojas</h2>
          <div className="popular-products">
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    produto={{
                        id: product.id,
                        nome: product.nome,
                        preco: product.precoUnid,
                        imagem: product.urlImagem,
                        avaliacao: product.notaAvaliacao
                    }}
                />
            ))}
          </div>
          <div className="adcard">
            <img src="/Marimaria.svg" alt="ad" />
            <img src="/Marimariaprodutos.svg" alt="ad" />
            <img src="/Ox.svg" alt="ad" />
            <img src="/Medinaox.svg" alt="ad" />
          </div>
          <h2 className="text">Baseado no seu gosto</h2>
          <div className="popular-products">
            {randomProducts.map(product => (
                <ProductCard 
                    key={product.id} 
                    produto={{
                        id: product.id,
                        nome: product.nome,
                        preco: product.precoUnid,
                        imagem: product.urlImagem,
                        avaliacao: product.notaAvaliacao
                    }}
                />
            ))}
          </div>
        </div>
    );
};

export default Popular;