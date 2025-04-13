import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../login/UserContext";
import "./SideBar.css";

const Sidebar = () => {
  const { tipoUsuario } = useUser();

  const isAdmin = tipoUsuario === "admin";

  return (
    <div className="sidebar">
      <NavLink to="/profile" activeClassName="active">
        <button>
          <img src="/IconPerfil.svg" alt="User Icon" />
        </button>
      </NavLink>
      <NavLink to="/wallet" activeClassName="active">
        <button>
          <img src="/wallet.svg" alt="Wallet Icon" />
        </button>
      </NavLink>
      <NavLink to="/settings" activeClassName="active">
        <button>
          <img src="/setting.svg" alt="Settings Icon" />
        </button>
      </NavLink>
      <NavLink to="/history" activeClassName="active">
        <button>
          <img src="/history.svg" alt="History Icon" />
        </button>
      </NavLink>
      {isAdmin && (
        <NavLink to="/admin" activeClassName="active">
          <button>
            <img src="/ferramentaadm.svg" alt="Admin Icon" />
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;
