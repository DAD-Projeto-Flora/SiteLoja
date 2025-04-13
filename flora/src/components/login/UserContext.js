import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tipoUsuario, setTipoUsuarioState] = useState(null);
  const [userId, setUserIdState] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const tipoSalvo = localStorage.getItem("tipoUsuario");
    const idSalvo = localStorage.getItem("userId");
    const savedCart = localStorage.getItem("cartItems");

    if (tipoSalvo) setTipoUsuarioState(tipoSalvo);
    if (idSalvo) setUserIdState(idSalvo);
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const setTipoUsuario = (tipo) => {
    setTipoUsuarioState(tipo);
    localStorage.setItem("tipoUsuario", tipo);
  };

  const setUserId = (id) => {
    setUserIdState(id);
    localStorage.setItem("userId", id);
  };

  const addToCart = (product) => {
    const withId = {
      ...product,
      id: product.id || crypto.randomUUID(), // gera um id único se não tiver
    };
    setCartItems((prev) => [...prev, withId]);
  };
  

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  

  return (
    <UserContext.Provider
      value={{
        tipoUsuario,
        setTipoUsuario,
        userId,
        setUserId,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
