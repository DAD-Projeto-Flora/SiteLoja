import React from 'react';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import CardCategory from '../../components/home/CardCategory';
import './Home.css';
import BestSellers from '../../components/home/BestSellers'
import Popular from '../../components/home/Popular';
import Footer from '../../components/home/Footer';
import { useNavigate } from "react-router-dom";



const Home = () => {

  const navigate = useNavigate();

  
  const handleCategoryClick = (categoryId) => {
    navigate(`/catalog?categoryId=${categoryId}`);
  };

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <div className='category-cards'>
          <CardCategory
            image="/cabelo.svg"
            title="Cabelo"
            onClick={() => handleCategoryClick(1)}
          />
           <CardCategory
            image="/higiene.svg"
            title="Higiene Pessoal"
            onClick={() => handleCategoryClick(2)}
          />
           <CardCategory
            image="/insetos.svg"
            title="Controle de Insetos"
            onClick={() => handleCategoryClick(3)}
          />
           <CardCategory
            image="/casa.svg"
            title="Casa"
            onClick={() => handleCategoryClick(4)}
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
