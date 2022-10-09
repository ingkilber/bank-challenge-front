import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success justify-content-center">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link fs-3" href="/Accounts">Cuentas</a>
    </li>
    <li className="nav-item">
      <a className="nav-link fs-3" href="/Transfer">Transferir</a>
    </li>
    <li className="nav-item">
      <a className="nav-link fs-3" href="#">Historial</a>
    </li>
  </ul>
</nav>
    
  </div>
);
}

export default Navbar;