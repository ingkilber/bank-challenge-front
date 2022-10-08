import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success justify-content-center">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#"><h4>Cuestas</h4></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#"><h4>Transferencias</h4></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#"><h4>Tarjetas</h4></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#"><h4>Inversiones</h4></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#"><h4>Préstamos</h4></a>
    </li>
  </ul>
</nav>
    
  </div>
);
}

export default Navbar;