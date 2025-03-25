import { useState } from "react";
import "./LoginCard.css";
import { Link } from "react-router-dom";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
        <img src="/circulos.svg" alt="círculos" className="login-circle" />
        <img src="/logoCompleta.svg" alt="logo" className="login-leaf" />
      <div className="login-card">
        <h2 className="login-title">Bem-vindo <br/> à Flora!</h2>
        <div className="input-group">
          <label>Email</label>
          <div className="input-wrapper">
          <img src="/email.svg" alt="email" />
            <input  type="email" placeholder="example@gmail.com" 
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Por favor, insira um email válido."
              required 
              />
          </div>
        </div>
        <div className="input-group">
          <label>Senha</label>
          <div className="input-wrapper">
          <img src="/password.svg" alt="key" />
            <input required type={showPassword ? "text" : "password"} placeholder="Insira sua senha"/>
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ?  <img className="eye_fill" src="/eye_fill.svg" alt="olho aberto" /> :  <img className="eye_not_fill" src="/eye_not_fill.svg" alt="olho fechado" />}
            </button>
          </div>
          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>
        </div>
        <Link to="/profile"><button className="login-button">Login</button></Link>
        <p className="register-text">
          Não tem uma conta ainda? <a href="/register" className="register-link">Registre-se</a>
        </p>
      </div>
    </div>
  );
}