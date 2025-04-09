import React from 'react';
import Header from '../../components/home/Header';
import Sidebar from '../../components/navigation/SideBar';

const Product = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
        </main>
        <Footer/>
        </div>
    );
}

export default Product;