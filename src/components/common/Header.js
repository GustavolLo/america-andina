import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Accueil actualité
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        Qui sommes nous?
      </NavLink>
      <NavLink to="/dances" activeStyle={activeStyle}>
        Danses latinoaméricaines
      </NavLink>
      <NavLink to="/contact" activeStyle={activeStyle}>
        Contactez-nous
      </NavLink>
    </nav>
  );
};

export default Header;
