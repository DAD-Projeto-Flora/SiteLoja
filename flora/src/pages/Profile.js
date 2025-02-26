import React from 'react';
import Header from '../components/home/Header';
import Sidebar from '../components/SideBar';



const Profile = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <h1>Perfil</h1>

        </main>
        </div>
    );
}

export default Profile;