import { useState, useEffect } from "react";
import "./LoginCard.css";
import { useNavigate } from "react-router-dom";
import { verificarUsuario } from "../../autenticação/getClient";
import { useUser } from "../login/UserContext";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { tipoUsuario, setTipoUsuario, setUserId } = useUser();

  const handleLogin = async () => {
    try {
      const resultado = await verificarUsuario(email, senha);

      if (resultado.tipo === "admin") {
        setTipoUsuario("admin");
        navigate("/profile");
      } else if (resultado.tipo === "cliente") {
        setUserId(resultado.dados.id)
        setTipoUsuario("cliente");
        navigate("/profile");
      } else {
        alert("Usuário não encontrado.");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  useEffect(() => {
    if (tipoUsuario) {
      navigate("/profile");
    }
  }, [tipoUsuario]);

  return (
    <div className="login-container">
      <img src="/circulos.svg" alt="círculos" className="login-circle" />
      <img src="/LogoCompleta.svg" alt="logo" className="login-leaf" />
      <div className="login-card">
        <h2 className="login-title">
          Bem-vindo <br /> à Flora!
        </h2>

        <div className="input-group-login">
          <label>Email</label>
          <div className="input-wrapper-login">
            <img src="/email.svg" alt="email" />
            <input
              type="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
              title="Por favor, insira um email válido."
              required
            />
          </div>
        </div>

        <div className="input-group-login">
          <label>Senha</label>
          <div className="input-wrapper-login">
            <img src="/password.svg" alt="key" />
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Insira sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img
                  className="eye_fill"
                  src="/eye_fill.svg"
                  alt="olho aberto"
                />
              ) : (
                <img
                  className="eye_not_fill"
                  src="/eye_not_fill.svg"
                  alt="olho fechado"
                />
              )}
            </button>
          </div>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <p className="register-text">
          Não tem uma conta ainda?{" "}
          <a href="/register" className="register-link">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
}
