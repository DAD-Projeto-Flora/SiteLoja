import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [tipoUsuario, setTipoUsuario] = useState(null);

  return (
    <UserContext.Provider value={{ tipoUsuario, setTipoUsuario }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
