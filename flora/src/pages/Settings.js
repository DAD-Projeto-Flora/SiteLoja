import React from 'react';
import Header from '../components/home/Header';
import Sidebar from '../components/SideBar';
import ConfigCard from '../components/config/ConfigCard';



const Config = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <ConfigCard 
            image="https://www.w3schools.com/howto/img_avatar2.png"
            name="Maria Joaquina da Silva"
            email="maria.joaquina@gmail.com"/>
        </main>
        </div>
    );
}

export default Config;  