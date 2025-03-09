import React from 'react';
import Header from '../components/home/Header';
import Sidebar from '../components/SideBar';
import CardProfile from '../components/profile/CardProfile';



const Profile = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <CardProfile />
        </main>
        </div>
    );
}

export default Profile;