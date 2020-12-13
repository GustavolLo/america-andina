import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-sm fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="nav navbar-nav mr-auto">
          <NavLink to="/" activeStyle={activeStyle} exact>
            <li className="nav-item active">
              <div className="nav-link">Accueil</div>
            </li>
          </NavLink>
          <NavLink to="/news" activeStyle={activeStyle} exact>
            <li className="nav-item active">
              <div className="nav-link">Actualités</div>
            </li>
          </NavLink>
          <NavLink to="/about" activeStyle={activeStyle}>
            <li className="nav-item active">
              <div className="nav-link">Qui sommes nous?</div>
            </li>
          </NavLink>
          <NavLink to="/dances" activeStyle={activeStyle}>
            <li className="nav-item active">
              <div className="nav-link">Danses latinoaméricaines</div>
            </li>
          </NavLink>
          <NavLink to="/contact" activeStyle={activeStyle}>
            <li className="nav-item active">
              <div className="nav-link">Contactez-nous</div>
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
