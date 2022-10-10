import React, { Component } from "react";
import { Button} from "react-bootstrap";
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
                aria-expanded="false"
              >
                <strong class="d-none d-sm-block ms-1 p-4">Bienvenido! </strong>
                <img
                  src="http://svgur.com/i/4V0.svg"
                  className="rounded-circle"
                  height="45"
                  alt="Black and White"
                  loading="lazy"
                />
              </div>              
            </div>
            <Button
                          href="/"
                          variant="success"
                          type="submit"
                          className="m-4"
                        >
                          Cerrar sesión
                        </Button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
