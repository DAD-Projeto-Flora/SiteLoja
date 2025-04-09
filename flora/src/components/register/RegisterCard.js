import { useState } from "react";
import "./RegisterCard.css";

const RegisterCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="cadastro-container">
      <img src="/manchatop.svg" alt="email" className="decoration-background"/>
      <img src="/manchabottom.svg" alt="email" className="decoration-background-bottom"/>
      <div className="cadastro-card">
        <h2 className="cadastro-title text">
          Faça seu cadastro e aproveite os produtos da <span className="bold">Flora!</span>
        </h2>
        
        <div className="content-register">
          <div className="forms-register">
            <div className="form-row">
              <div className="form-group">
                <label className="text">Email <span>*</span></label>
                <div className="input-wrapper">
                  <img src="/email.svg" alt="email" className="icons-input"/>
                  <input type="email" placeholder="Escreva seu email" />
                </div>
              </div>

              <div className="form-group">
                <label className="text">Número de telefone <span>*</span></label>
                <div className="input-wrapper">
                  <img src="/telefone.svg" alt="tel" className="icons-input"/>
                  <input type="tel" placeholder="Escreva seu número de telefone" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="text">Senha <span>*</span></label>
                <div className="input-wrapper">
                  <img src="/chave.svg" alt="chave" className="icons-input"/>
                  <input type={showPassword ? "text" : "password"} placeholder="Escreva sua senha" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <img className="eye_fill" src="/eye_fill.svg" alt="olho aberto" />  : <img className="eye_not_fill" src="/eye_not_fill.svg" alt="olho fechado" />}
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label className="text">Nome completo <span>*</span></label>
                <div className="input-wrapper">
                  <img src="/nomecompleto.svg" alt="iconarquivo" className="icons-input"/>
                  <input type="text" placeholder="Escreva seu nome completo" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
              <label className="text">Confirme sua senha <span>*</span></label>
                <div className="input-wrapper">
                  <img src="/chave.svg" alt="chave" className="icons-input"/>
                  <input type={showConfirmPassword ? "text" : "password"} placeholder="Escreva sua senha novamente" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <img className="eye_fill" src="/eye_fill.svg" alt="olho aberto" /> : <img className="eye_not_fill" src="/eye_not_fill.svg" alt="olho fechado" />}
                  </button>
                </div>
              </div>
              <div className="form-group">
                  <label className="text">CPF <span>*</span></label>
                  <div className="input-wrapper">
                    <img src="/pessoacpf.svg" alt="iconcpf" className="icons-input"/>
                    <input type="text" placeholder="Escreva seu CPF"/>
                  </div>
                </div>
            </div>
          </div>
          

          <p className="terms-text text">
            Ao se cadastrar na Flora, você concorda com nossos <a href="#">Termos</a> e <a href="#">Política de Privacidade</a>.
          </p>
          <div className="button-register">
            <button className="cadastro-button">Cadastrar</button>

          </div>        
          <p className="login-text text">
            Já tem uma conta? <a href="/login" className="login-link">Faça seu login</a>
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default RegisterCard