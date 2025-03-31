import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import ProductCard from '../../components/home/ProductCardBestSellers';
import CardCategory from '../../components/home/CardCategory';
import './Home.css';
import BestSellers from '../../components/home/BestSellers'

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <div className='category-cards'>
          <CardCategory
            image="/cabelo.svg"
            title="Cabelo"
          />
           <CardCategory
            image="/higiene.svg"
            title="Higiene Pessoal"
          />
           <CardCategory
            image="/insetos.svg"
            title="Controle de Insetos"
          />
           <CardCategory
            image="/casa.svg"
            title="Casa"
          />
        </div>

        <BestSellers/>
          <h2>Popular nas lojas</h2>
      </main>
    </div>
  );
};

export default Home;
