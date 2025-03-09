import React from "react";
import "./CardProfile.css"; // Importa o arquivo de estilos

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="header-profile">
        <div className="user-info">
          <img
            className="avatar"
            src="https://via.placeholder.com/150"
            alt="Perfil"
          />
          <div>
            <h2>Alexa Rawles</h2>
            <p>alexarawles@gmail.com</p>
          </div>
        </div>
        <button className="save-button">Salvar</button>
      </div>

      <div className="form-grid">
        <div>
          <label>Nome completo</label>
          <input type="text" placeholder="Insira seu nome completo" />
        </div>

        <div>
          <label>Nome de usuário</label>
          <input type="text" placeholder="Insira seu nome de usuário" />
        </div>

        <div>
          <label>Gênero</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="Feminino" defaultChecked /> Feminino
            </label>
            <label>
              <input type="radio" name="gender" value="Masculino" /> Masculino
            </label>
            <label>
              <input type="radio" name="gender" value="Outros" /> Outros
            </label>
          </div>
        </div>

        <div>
          <label>Número de telefone</label>
          <div className="phone-input">
            <span>🇧🇷 +55</span>
            <input type="text" placeholder="11 4002-8922" />
          </div>
        </div>

        <div>
          <label>Contatos cadastrados</label>
          <div className="contact-box">
            <span>📧</span>
            <p>alexarawles@gmail.com</p>
          </div>
          <button className="add-button">+Adicionar contato</button>
        </div>

        <div>
          <label>Endereços cadastrados</label>
          <div className="contact-box">
            <span>📍</span>
            <p>Barueri</p>
          </div>
          <button className="add-button">+Adicionar endereço</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
