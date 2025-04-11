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
            <PurchaseHistory />
        </main>
        </div>
    );
}

export default History;