import React, { useEffect, useState } from "react";
import "./CardProfile.css";
import { getClientById } from "../../autenticação/getClientById";
import LoadingSpinner from "../catalog/LoadingSpinner";

const ProfileCard = () => {
  const [client, setClient] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = localStorage.getItem("userId");
  const clientId = user?.id;

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await getClientById(clientId);
        setClient(data);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
      } finally {
        setLoading(false);
      }
    };

    if (clientId) fetchClient();
  }, [clientId]);

  const openModalEndereco = () => setModalType("endereco");
  const openModalEmail = () => setModalType("email");
  const closeModal = () => setModalType(null);

  if (loading || !client) return <LoadingSpinner />;

  return (
    <div className="profile-container">
      <div className="header-decoration"></div>

      {/* Modais de e-mail e endereço */}
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

      {/* Card principal */}
      <div className="profile-card">
        <div className="header-profile">
          <div className="user-info">
            <img className="avatar" src={client.foto_perfil} alt="Foto de Perfil" />
            <div>
              <h2 className="text">{client.nome_completo}</h2>
              <p className="text">{client.email}</p>
            </div>
          </div>
          <button className="save-button">Salvar</button>
        </div>

        <div className="form-grid">
          <div className="name-grid">
            <div>
              <label className="text">Nome completo</label>
              <input type="text" placeholder={client.nome_completo} className="input-card-profile" />
              <label className="text">Nome de usuário</label>
              <input type="text" placeholder={client.nome_usuario} className="input-card-profile" />
            </div>
          </div>

          <div className="more-info">
            <div>
              <label className="text">Gênero</label>
              <div className="gender-options">
                <label className="text">
                  <input type="radio" name="gender" value="Feminino" defaultChecked={client.genero === "Feminino"} /> Feminino
                </label>
                <label className="text">
                  <input type="radio" name="gender" value="Masculino" defaultChecked={client.genero === "Masculino"} /> Masculino
                </label>
              </div>

              <label className="text">Número de telefone</label>
              <div className="phone-input">
                <div id="input-card-profile-ddd">
                  <img className="icon-brasil" src="/brasil.svg" alt="Endereço" />
                  <span className="text">+55</span>
                </div>
                <input
                  type="text"
                  placeholder={client.telefone}
                  className="input-card-profile"
                  id="tel-input"
                />
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
                  <p className="text">{client.email}</p>
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
