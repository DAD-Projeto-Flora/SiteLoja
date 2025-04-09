import React from "react";
import "./ConfigCard.css"; // Importa o arquivo de estilos

const ConfigCard = ({name,image, email, password}) => {
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
          <div className="info-grid">
            <div>
              <div>
                <label className="text">Senha antiga</label>
                <input type="text" placeholder="Insira sua senha atual" className="input-config-card"/>
              </div>
              <div>
                <label className="text">Confirme a nova senha</label>
                <input type="text" placeholder="Insira sua nova senha novamente" className="input-config-card"/>
              </div>
            </div>
          </div>
          
        </div>
          
        <div className="form-grid">
          <div className="info-grid">
            <div>
              <div>
                <label className="text">Nova senha</label>
                <input type="text" placeholder="Insira sua nova senha" className="input-config-card"/>
              </div>
              <div>
                <label className="text">Mudar e-mail</label>
                <input type="text" placeholder="Insira seu novo e-mail" className="input-config-card"/>
              </div>
            </div>
            <div className="delete-part">
            <div>
              <div className="delete">
                <label className="text">Excluir conta</label>
                <button className="delete-button">Deletar conta</button>
              </div>
            </div>
          </div>
          </div>
          
        </div>
          </div>
        </div>
  );
};

export default ConfigCard;