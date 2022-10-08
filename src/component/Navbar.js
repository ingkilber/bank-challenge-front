import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success justify-content-center">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link fs-3" href="#">Cuestas</a>
    </li>
    <li className="nav-item">
      <a className="nav-link fs-3" href="#">Transferencias</a>
    </li>
    <li className="nav-item">
      <a className="nav-link fs-3" href="#">Tarjetas</a>
    </li>
    <li className="nav-item">
      <a className="nav-link fs-3" href="#">Inversiones</a>
    </li>
    <li className="nav-item">
      <a className="nav-link fs-3" href="#">Préstamos</a>
    </li>
  </ul>
</nav>
    
  </div>
);
}

export default Navbar;