import React from "react";
import ProductCard from "./ProductCardBestSellers";
import "./BestSellers.css";

const BestSellers = () => {
    const products = [
        { id: 1, title: "Produto 1", price: "100,00", image: "/Neutrox.svg", rating: 4 },
        { id: 2, title: "Produto 2", price: "150,00", image: "/Neutrox.svg", rating: 5 },
        { id: 3, title: "Produto 3", price: "200,00", image: "/Neutrox.svg", rating: 3 }
    ];

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
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;