import React, { useEffect, useState } from "react";
import ProductCard from "../catalog/ProductCard"; // Atualiza a importação para ProductCard
import "./Popular.css";

const Popular = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Faz a requisição para a API que retorna os produtos
        fetch("https://apilojaflora.onrender.com/product/getProducts")
            .then(response => response.json())
            .then(data => {
                // Seleciona os 4 primeiros produtos
                const popularProducts = data.slice(0, 4);
                setProducts(popularProducts);
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
            <img src="/marimaria.png" alt="ad" />
            <img src="/marimaria2.png" alt="ad" />
            <img src="/ox.png" alt="ad" />
            <img src="/medina.png" alt="ad" />
          </div>
          <h2 className="text">Baseado no seu gosto</h2>
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
        </div>
    );
};

export default Popular;