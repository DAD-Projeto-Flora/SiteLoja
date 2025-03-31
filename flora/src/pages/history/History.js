import React from 'react';
import Header from '../../components/home/Header';
import Sidebar from '../../components/navigation/SideBar';
import PurchaseHistory from '../../components/history/PurchaseHistory';

const History = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <PurchaseHistory 
                image="https://www.w3schools.com/howto/img_avatar2.png"
                name="Maria Joaquina da Silva"
                email="maria.joaquina@gmail.com"/>
        </main>
        </div>
    );
}

export default History;