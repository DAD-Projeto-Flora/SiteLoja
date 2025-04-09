import React from 'react';
import Header from '../../components/home/Header';
import Footer from '../../components/home/Footer';
import ProductPage from '../../components/productpage/ProductPage';



const Product = () => {
    return (
        <div>
        <Header />
        <main>
            <ProductPage 
            image="https://www.w3schools.com/howto/img_avatar2.png"
            title="Maria Joaquina da Silva"
            price="R$ 100,00"
            desc= "adawdawdadawdawd"
            rating={4}
            category="Roupas"/>
        </main>
        <Footer/>
        </div>
    );
}

export default Product;