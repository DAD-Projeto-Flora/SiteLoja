import React from 'react';
import Header from '../../components/home/Header';
import Sidebar from '../../components/navigation/SideBar';
import AdminPage from '../../components/admin/AdminArea';


const Admin = () => {
    return (
        <div>
        <Header />
        <main>
            <Sidebar />
            <AdminPage />
        </main>
        </div>
    );
}

export default Admin;