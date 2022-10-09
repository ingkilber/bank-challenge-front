import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Content = () => {
  return (
    <div className="container-xl mt-4">
        <div className="d-flex justify-content-center p-1 mt-4 fs-4">Consulta de saldo</div>
        <div className="fw-bold mb-2 text-uppercase d-flex justify-content-center p-4 fs-3" href="#">Selecciona la cuenta a consultar</div>

<div class="row row-cols-1 row-cols-md-3 g-4  mt-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body bg-success">
        <h5 class="text-white d-flex justify-content-center">Cuenta Corriente</h5>
        <p class="text-info d-flex justify-content-center fs-5" href="#">2214668549616</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body bg-success">
        <h5 class="text-white d-flex justify-content-center">Caja de Ahorro</h5>
        <a class="text-info d-flex justify-content-center fs-5" href="#">1496874645056</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body bg-success">
        <h5 class="text-white d-flex justify-content-center">Cuenta Corriente</h5>
        <a class="text-info d-flex justify-content-center fs-5" href="#">13126849605</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body bg-success">
        <h5 class="text-white d-flex justify-content-center">Caja de Ahorro</h5>
        <a class="text-info d-flex justify-content-center fs-5" href="#">1496874645056</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body bg-success">
        <h5 class="text-white d-flex justify-content-center">Cuenta Corriente</h5>
        <a class="text-info d-flex justify-content-center fs-5" href="#">13126849605</a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-body bg-success">        
        <a className="text-info d-flex justify-content-center fs-5 m-4" href="#">Más opciones 
        <i className="fa fa-backward"></i></a>
      </div>
    </div>
  </div>

</div>
    
  </div>
);
}

export default Content;