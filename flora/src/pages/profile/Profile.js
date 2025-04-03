import React from 'react';
import Header from '../../components/home/Header';
import Sidebar from '../../components/navigation/SideBar';
import CardProfile from '../../components/profile/CardProfile';

const Profile = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <CardProfile 
            image="https://www.w3schools.com/howto/img_avatar2.png"
            name="Maria Joaquina da Silva"
            user="Maria Joaquina"
            email="maria.joaquina@gmail.com"
            tel="11 996119488"
            gender="Feminino"
            endereco="Rio de Janeiro"/>
        </main>
        <Footer/>
        </div>
    );
}

export default Profile;