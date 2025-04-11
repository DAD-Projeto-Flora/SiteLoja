import React, { useState } from "react";
import "./CardProfile.css";

const user = JSON.parse(localStorage.getItem("user"));

const ProfileCard = () => {
  const [modalType, setModalType] = useState(null);

  const openModalEndereco = () => setModalType("endereco");
  const openModalEmail = () => setModalType("email");
  const closeModal = () => setModalType(null);

  return (
    <div className="profile-container">
      <div className="header-decoration"></div>

      {modalType === "email" && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Atualizar E-mail</h2>
            <div className="modal-form">
              <label>Novo e-mail <span>*</span></label>
              <input type="text" placeholder="novo.email@gmail.com" className="input-card-profile-modal" />
            </div>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>Cancelar</button>
              <button className="save-button">Salvar</button>
            </div>
          </div>
        </div>
      )}

      {modalType === "endereco" && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Atualizar Endereço</h2>
            <div className="modal-form">
              <label>CEP <span>*</span></label>
              <input type="text" placeholder="00028-922" className="input-card-profile-modal" />
              <label>Estado - Cidade <span>*</span></label>
              <input type="text" placeholder="São Paulo - Osasco" className="input-card-profile-modal" />
              <label>Bairro <span>*</span></label>
              <input type="text" placeholder="Km 18" className="input-card-profile-modal" />
              <div className="street-number">
                <div className="rua">
                  <label className="text title-numrua">Rua <span>*</span></label>
                  <input type="text" placeholder="Rua dos bobos" className="input-card-profile-modal" />
                </div>
                <div className="num">
                  <label className="text title-numrua">Número <span>*</span></label>
                  <input type="text" placeholder="Número" className="input-card-profile-modal" />
                </div>
              </div>
              <label>Complemento <span>*</span></label>
              <input type="text" placeholder="Descrição do Prédio / Bloco / Referências próximas" className="input-card-profile-modal" />
            </div>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>Cancelar</button>
              <button className="save-button">Salvar</button>
            </div>
          </div>
        </div>
      )}

      <div className="profile-card">
        <div className="header-profile">
          <div className="user-info">
            <img className="avatar" src={user.fotoPerfil} alt="Foto de Perfil" />
            <div>
              <h2 className="text">{user.nomeCompleto}</h2>
              <p className="text">{user.email}</p>
            </div>
          </div>
          <button className="save-button">Salvar</button>
        </div>

        <div className="form-grid">
          <div className="name-grid">
            <div>
              <div>
                <label className="text">Nome completo</label>
                <input type="text" placeholder={user.nomeCompleto || "Nome completo"} className="input-card-profile" />
              </div>
              <div>
                <label className="text">Nome de usuário</label>
                <input type="text" placeholder={user.nomeUsuario || "Nome de usuário"} className="input-card-profile" />
              </div>
            </div>
          </div>

          <div className="more-info">
            <div>
              <div>
                <label className="text">Gênero</label>
                <div className="gender-options">
                  <label className="text">
                    <input type="radio" name="gender" value="Feminino" defaultChecked /> Feminino
                  </label>
                  <label className="text">
                    <input type="radio" name="gender" value="Masculino" /> Masculino
                  </label>
                  <label className="text">
                    <input type="radio" name="gender" value="Outros" /> Outros
                  </label>
                </div>
              </div>

              <div>
                <label className="text">Número de telefone</label>
                <div className="phone-input">
                  <div id="input-card-profile-ddd">
                    <img className="icon-brasil" src="/brasil.svg" alt="Endereço" />
                    <span className="text">+55</span>
                  </div>
                  <input
                    type="text"
                    placeholder={user.telefone || "11999999999"}
                    className="input-card-profile"
                    id="tel-input"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="info-contact">
            <div>
              <div className="card-info text">
                <label>E-mail cadastrado</label>
                <div className="contact-box">
                  <span>
                    <img className="icon" src="/IconEmail.svg" alt="Icon Email" />
                  </span>
                  <p className="text">{user.email}</p>
                </div>
                <button className="add-button" onClick={openModalEmail}>+ Atualizar e-mail</button>
              </div>

              <div className="card-info">
                <label className="text">Endereço cadastrado</label>
                <div className="contact-box">
                  <span>
                    <img className="icon" src="/Loc.svg" alt="Endereço" />
                  </span>
                  <p className="text">Endereço não informado</p>
                </div>
                <button className="add-button" onClick={openModalEndereco}>+ Atualizar endereço</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
