import React from 'react';
import Header from '../components/home/Header';
import Sidebar from '../components/SideBar';


const Settings = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <h1>Settings</h1>
        </main>
        </div>
    );
}

export default Settings;