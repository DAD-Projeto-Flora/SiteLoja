import React from 'react';
import Header from '../components/home/Header';
import Sidebar from '../components/SideBar';


const Wallet = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <h1>Wallet</h1>
        </main>
        </div>
    );
}

export default Wallet;