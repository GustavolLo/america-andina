import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/americaAndina-logo.jpg";

const Header = () => {
  return (
    <header id="main-navbar">
      <nav className="navbar bg-primary navbar-dark navbar-expand-md fixed-top">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top rounded-circle mx-2"
            alt="Logo"
          />
          <div className="d-inline-block display-6 px-2">America Andina</div>
        </a>
        <button
          className="navbar-toggler align-right"
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
          <ul className="nav navbar-nav ml-auto">
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
