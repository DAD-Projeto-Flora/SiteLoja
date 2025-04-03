import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import CardCategory from '../../components/home/CardCategory';
import './Home.css';
import BestSellers from '../../components/home/BestSellers'
import Popular from '../../components/home/Popular';
import Footer from '../../components/home/Footer';

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
        <Popular/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
