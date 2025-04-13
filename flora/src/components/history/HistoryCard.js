import React, { useEffect, useState } from 'react';
import { getOrderByClientId } from '../../autenticação/getOrderByClientId';
import './HistoryCard.css';
import { useUser } from "../login/UserContext";


const HistoryCard = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userId } = useUser();
    

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const data = await getOrderByClientId(userId);
                console.log(data);
                setPurchases(data);
            } catch (err) {
                setError('Erro ao carregar as compras.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPurchases();
    }, [userId]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="history-container">
            {purchases.map((purchase, index) => (
                <div key={index} className="purchase-group">
                    <div className="borda">
                        <h3 className="title-history">Produto comprado</h3>
                        <h3 className="title-history">Preço total: R${purchase.precoTotal.toFixed(2)}</h3>
                    </div>
                    <div className="products-container">
                        <div className="text-products">
                            <h4 className="text">
                                <span className="bold">Data da compra: </span> {purchase.dataPedido}
                            </h4>
                        </div>

                        <div className="products">
                            <div className="product-card-history">
                                <div className="infos-products-history">
                                    <img
                                        className="photo-product-history"
                                        src={purchase.produto.urlImagem}
                                        alt={purchase.produto.nome}
                                    />
                                    <div className="text-info-products">
                                        <p className="text">
                                            <span className="bold">Nome: </span>{purchase.produto.nome}
                                        </p>
                                        <p className="text">
                                            <span className="bold">Categoria: </span>{purchase.produto.categoria.nome}
                                        </p>
                                        <p className="text">
                                            <span className="bold">Quantidade: </span>{purchase.qntProduto}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text">
                                        <span className="bold">Preço unitário: </span>R${purchase.produto.precoUnid.toFixed(2)}
                                    </p>
                                    <button className="button-card">Ver produto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HistoryCard;