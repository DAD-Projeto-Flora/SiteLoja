import React from "react";
import "./CardProfile.css"; // Importa o arquivo de estilos

const ProfileCard = ({ image, name, user, email, tel, gender, endereco }) => {
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
          <div className="name-grid">
            <div>
              <div>
                <label>Nome completo</label>
                <input type="text" placeholder={name} />
              </div>
              <div>
                <label>Nome de usuário</label>
                <input type="text" placeholder={user} />
              </div>
            </div>
          </div>
          
          <div className="more-info">
            <div>
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
                  <div>
                    <img className="icon-brasil"
                    src="/brasil.svg"
                    alt="Endereço"/>
                    <span>+55</span>
                  </div>
                  <input type="text" placeholder={tel} />
                </div>
              </div>

            </div>
          
          </div>

          <div className="info-contact">
            <div>
              <div className="card-info">
                <label>Contatos cadastrados</label>
                <div className="contact-box">
                  <span>
                    <img className="icon"
                    src="/IconEmail.svg"
                    alt="Endereço"/>
                  </span>
                  <p>{email}</p>
                </div>
                <button className="add-button">+Adicionar contato</button>
              </div>

              <div className="card-info">
                <label>Endereços cadastrados</label>
                <div className="contact-box">
                  <span>
                    <img className="icon"
                    src="/Loc.svg"
                    alt="Endereço"/>
                  </span>
                  <p>{endereco}</p>
                </div>
                <button className="add-button">+Adicionar endereço</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
