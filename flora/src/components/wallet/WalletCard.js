import React from "react";
import "./WalletCard.css"; // Importa o arquivo de estilos

const WalletCard = ({ name, email, image, numbercard, namecard, cvv, mmaa}) => {
  return (
    <div className="profile-container">
      <div className="header-decoration"></div>
      
      <div className="profile-card">
        <div className="header-profile">
          <div className="user-info">
            <img
              className="avatar"
              src={image}
              alt="Foto de Perfil"
            />
            <div>
              <h2 className="text">{name}</h2>
              <p className="text">{email}</p>
            </div>
          </div>
          <button className="save-button">Salvar</button>
        </div>

        <div className="form-grid">
          <div className="card-grid">
            <div>
              <div>
                <label className="text">Número do cartão</label>
                <input type="text" placeholder={numbercard} className="input-wallet-card"/>
              </div>
              <div>
                <label className="text">Data de Validade (MMAA)</label>
                <input type="text" placeholder={mmaa} className="input-wallet-card"/>
              </div>
            </div>
          </div>
          
        </div>
          
        <div className="form-grid">
          <div className="name-grid">
            <div>
              <div>
                <label className="text">Nome do cartão</label>
                <input type="text" placeholder={namecard} className="input-wallet-card"/>
              </div>
              <div>
                <label className="text">CVV</label>
                <input type="text" placeholder={cvv} className="input-wallet-card"/>
              </div>
            </div>
            <div className="info-card">
            <div>
              <div className="card-info">
                <label className="text">Cartão cadastrado</label>
                <div className="card-box">
                  <span>
                    <img className="icon"
                    src="/logoCartao.svg"
                    alt="Endereço"/>
                  </span>
                  <p className="text">{namecard}</p>
                </div>
                <button className="add-button">Atualizar cartão</button>
              </div>
            </div>
          </div>
          </div>
        </div>
          </div>
        </div>
  );
};

export default WalletCard;