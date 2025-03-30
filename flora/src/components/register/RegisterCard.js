import { useState } from "react";
import "./RegisterCard.css";

const RegisterCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2 className="cadastro-title">
          Faça seu cadastro e aproveite os produtos da <span className="bold">Flora!</span>
        </h2>
        
        <div className="form-row">
          <div className="form-group">
            <label>Email <span>*</span></label>
            <div className="input-wrapper">
              <input type="email" placeholder="Escreva seu email" />
            </div>
          </div>

          <div className="form-group">
            <label>Número de telefone <span>*</span></label>
            <div className="input-wrapper">
              <input type="tel" placeholder="Escreva seu número de telefone" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Nome completo <span>*</span></label>
            <div className="input-wrapper">
              <input type="text" placeholder="Escreva seu nome completo" />
            </div>
          </div>

          <div className="form-group">
            <label>CPF <span>*</span></label>
            <div className="input-wrapper">
              <input type="text" placeholder="Escreva seu CPF" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Senha <span>*</span></label>
            <div className="input-wrapper">
              <input type={showPassword ? "text" : "password"} placeholder="Escreva sua senha" />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <img className="eye_fill" src="/eye_fill.svg" alt="olho aberto" />  : <img className="eye_not_fill" src="/eye_not_fill.svg" alt="olho fechado" />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Confirme sua senha <span>*</span></label>
            <div className="input-wrapper">
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Escreva sua senha novamente" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <img className="eye_fill" src="/eye_fill.svg" alt="olho aberto" /> : <img className="eye_not_fill" src="/eye_not_fill.svg" alt="olho fechado" />}
              </button>
            </div>
          </div>
        </div>


        <p className="terms-text">
          Ao se cadastrar na Flora, você concorda com nossos <a href="#">Termos</a> e <a href="#">Política de Privacidade</a>.
        </p>
        
        <button className="cadastro-button">Cadastrar</button>
        
        <p className="login-text">
          Já tem uma conta? <a href="/login" className="login-link">Faça seu login</a>
        </p>
      </div>
      
    </div>
  );
}

export default RegisterCard