import React from "react";
import HeaderWithoutInfo from "../../components/login/HeaderWithoutInfo";
import RegisterCard from "../../components/register/RegisterCard";

const Register = () => {

    return (
        <div>
        <HeaderWithoutInfo />
        <main>
            <RegisterCard />
        </main>
        </div>
    );
    }

export default Register;