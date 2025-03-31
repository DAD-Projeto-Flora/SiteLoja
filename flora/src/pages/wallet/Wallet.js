import React from 'react';
import Header from '../../components/home/Header';
import Sidebar from '../../components/navigation/SideBar';
import WalletCard from '../../components/wallet/WalletCard';



const Wallet = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <WalletCard 
            image="https://www.w3schools.com/howto/img_avatar2.png"
            name="Maria Joaquina da Silva"
            email="maria.joaquina@gmail.com"/>
        </main>
        </div>
    );
}

export default Wallet;