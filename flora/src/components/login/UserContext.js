// src/components/login/UserContext.js
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tipoUsuario, setTipoUsuarioState] = useState(null);

  useEffect(() => {
    const tipoSalvo = localStorage.getItem("tipoUsuario");
    if (tipoSalvo) {
      setTipoUsuarioState(tipoSalvo);
    }
  }, []);

  const setTipoUsuario = (tipo) => {
    setTipoUsuarioState(tipo);
    localStorage.setItem("tipoUsuario", tipo); // salva no localStorage
  };

  return (
    <UserContext.Provider value={{ tipoUsuario, setTipoUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
