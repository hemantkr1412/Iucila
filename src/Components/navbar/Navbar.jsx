import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src="/assets/logo.png" />
        </div>
        <div className="nav-links">

          <p>Institucional</p>

          <p>Comunidad academica</p>

          <p>Propuesta académica</p>

          <p>Noticias</p>
          <p>Buscador</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
