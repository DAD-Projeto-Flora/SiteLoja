import React, { useState } from "react"; 
import "../home/Header.css";
import { Link } from "react-router-dom";

const HeaderWithoutInfo = () => {

  return (
      <header className="header">
        <nav className="nav">
          <Link to={"/"}>
            <div className="logo">
              <img src="/floraLogoFolha.svg" alt="Flora Logo Folha" />
              <img src="/floraLogo.svg" alt="Flora Logo" />
            </div>
          </Link>
        </nav>
      </header>
  );
};

export default HeaderWithoutInfo;
