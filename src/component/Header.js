import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/img/NCRLogo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <div className="container-md">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-brand mt-2 mt-lg-2">
              <img className="mx-auto d-block" src={Logo} alt="logo" />
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="link-secondary me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </div>

            <div className="dropdown">
              <div
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <strong class="d-none d-sm-block ms-1 p-4">Bienvenido! </strong>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
                  className="rounded-circle"
                  height="35"
                  alt="Black and White"
                  loading="lazy"
                />
              </div>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a className="dropdown-item">Perfil</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Configuración
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" class="btn btn-success m-4" href="/">Cerrar sesión </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
