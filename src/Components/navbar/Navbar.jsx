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
          <p>Home</p>

          <p>Institucional</p>

          <p>Comunidad academica</p>

          <p>Propuesta Académica</p>

          <p>Propuesta Académica</p>
          <p>Buscador</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
