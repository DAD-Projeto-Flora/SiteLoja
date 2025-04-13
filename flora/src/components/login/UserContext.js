// src/components/login/UserContext.js
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tipoUsuario, setTipoUsuarioState] = useState(null);
  const [userId, setUserIdState] = useState(null); // novo estado

  useEffect(() => {
    const tipoSalvo = localStorage.getItem("tipoUsuario");
    const idSalvo = localStorage.getItem("userId");

    if (tipoSalvo) {
      setTipoUsuarioState(tipoSalvo);
    }

    if (idSalvo) {
      setUserIdState(idSalvo);
    }
  }, []);

  const setTipoUsuario = (tipo) => {
    setTipoUsuarioState(tipo);
    localStorage.setItem("tipoUsuario", tipo);
  };

  const setUserId = (id) => {
    setUserIdState(id);
    localStorage.setItem("userId", id);
  };

  return (
    <UserContext.Provider
      value={{ tipoUsuario, setTipoUsuario, userId, setUserId }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
