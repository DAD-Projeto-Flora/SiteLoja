import React, { useEffect, useState } from "react";
import "./ConfigCard.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../login/UserContext";
import { getClientById } from "../../autenticação/getClientById";

const ConfigCard = () => {
  const { setTipoUsuario } = useUser();
  const navigate = useNavigate();
  const { userId } = useUser();
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = () => {
    setTipoUsuario(null);
    localStorage.removeItem("tipoUsuario");
    navigate("/login");
  };

  const updateSenha = async (id, novaSenha) => {
    try {
      const response = await fetch(`https://apilojaflora.onrender.com/client/partialUpdateClient/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senha: novaSenha }),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar a senha");
      }

      alert("Senha alterada com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao alterar senha:", error);
      alert("Erro ao alterar senha. Tente novamente.");
    }
  };

  const handleChangePassword = async () => {
    if (currentPassword !== client.senha) {
      setErrorMessage("Senha atual está incorreta.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("As senhas novas não coincidem.");
      return;
    }

    try {
      await updateSenha(client.id, newPassword);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Erro ao atualizar a senha. Tente novamente.");
    }
  };

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await getClientById(userId);
        setClient(data);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchClient();
  }, [userId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="profile-container">
      <div className="header-decoration"></div>

      <div className="profile-card">
        <div className="header-profile">
          <div className="user-info">
            <img className="avatar" src={client?.fotoPerfil} alt="Foto de Perfil" />
            <div>
              <h2 className="text">{client?.nome}</h2>
              <p className="text">{client?.email}</p>
            </div>
          </div>
          <button className="save-button" onClick={handleChangePassword}>
            Salvar
          </button>
        </div>

        <div className="form-grid">
          <div className="info-grid">
            <div>
              <div>
                <label className="text">Nova senha</label>
                <input
                  type="password"
                  placeholder="Insira sua nova senha"
                  className="input-config-card"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="text">Confirme a nova senha</label>
                <input
                  type="password"
                  placeholder="Insira sua nova senha novamente"
                  className="input-config-card"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </div>
          <div>
                <label className="text">Senha antiga</label>
                <input
                  type="password"
                  placeholder="Insira sua senha atual"
                  className="input-config-card"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
        </div>

        <div className="form-grid">
          <div className="info-grid">
            <div className="delete-part">
              <div className="delete">
                <label className="text">Excluir conta</label>
                <button className="delete-button">Deletar conta</button>
              </div>
              <div className="logout">
                <label className="text">Sair da conta</label>
                <button className="logout-button" onClick={handleLogout}>
                  Deslogar
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigCard;