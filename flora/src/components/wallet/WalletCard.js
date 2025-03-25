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
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </div>
          <button className="save-button">Salvar</button>
        </div>

        <div className="form-grid">
          <div className="card-grid">
            <div>
              <div>
                <label>Número do cartão</label>
                <input type="text" placeholder={numbercard} />
              </div>
              <div>
                <label>Data de Validade (MMAA)</label>
                <input type="text" placeholder={mmaa} />
              </div>
            </div>
          </div>
          
        </div>
          
        <div className="form-grid">
          <div className="name-grid">
            <div>
              <div>
                <label>Nome do cartão</label>
                <input type="text" placeholder={namecard} />
              </div>
              <div>
                <label>CVV</label>
                <input type="text" placeholder={cvv} />
              </div>
            </div>
            <div className="info-card">
            <div>
              <div className="card-info">
                <label>Cartões cadastrados</label>
                <div className="card-box">
                  <span>
                    <img className="icon"
                    src="/logoCartao.svg"
                    alt="Endereço"/>
                  </span>
                  <p>{namecard}</p>
                </div>
                <button className="add-button">+Adicionar cartão</button>
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
