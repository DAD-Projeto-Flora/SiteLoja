import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import ProductPage from '../../components/productpage/ProductPage';

const Product = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`/api/getProductById?id=${id}`);
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        console.error("Erro ao buscar produto", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div>
      <Header />
      <main>
        <ProductPage 
          image={produto.urlImagem}
          title={produto.nome}
          price={`R$ ${produto.precoUnid.toFixed(2).replace(".", ",")}`}
          desc={produto.descricao}
          rating={produto.notaAvaliacao}
          category={produto.categoria}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default Product;
