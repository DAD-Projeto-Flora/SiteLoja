import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCardBestSellers";
import "./BestSellers.css";

const BestSellers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Faz a requisição para a API que retorna todos os produtos
        fetch("https://apilojaflora.onrender.com/product/getProducts")
            .then(response => response.json())
            .then(data => {
                // Ordena os produtos por rating (decrescente) e pega os 3 primeiros
                console.log(data);
                const topRatedProducts = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 3);
                setProducts(topRatedProducts);
            })
            .catch(error => {
                console.error("Erro ao buscar os produtos:", error);
            });
    }, []);

    return (
        <div className="blueCube" style={{ backgroundImage: 'url(/blueCube.svg)' }}>
            <div className="blueCube-text">
                <h1>Mais vendidos</h1>
                <p>Confira os produtos mais vendidos, escolhidos pelos nossos clientes por sua qualidade e resultados incríveis. Perfeitos para realçar sua beleza</p>
            </div>
            <div className="containerCard">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        title={product.nome} 
                        price={product.precoUnid} 
                        image={product.urlImagem} 
                        rating={product.notaAvaliacao}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;