import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="main-navbar">
      <nav className="navbar bg-primary navbar-dark navbar-expand-md fixed-top">
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
            <NavLink to="/" exact>
              <li className="nav-item active">
                <div className="nav-link">Accueil</div>
              </li>
            </NavLink>
            <NavLink to="/news">
              <li className="nav-item active">
                <div className="nav-link">Actualités</div>
              </li>
            </NavLink>
            <NavLink to="/about">
              <li className="nav-item active">
                <div className="nav-link">Qui sommes nous?</div>
              </li>
            </NavLink>
            <NavLink to="/dances">
              <li className="nav-item active">
                <div className="nav-link">Danses latinoaméricaines</div>
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="nav-item active">
                <div className="nav-link">Contactez-nous</div>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
