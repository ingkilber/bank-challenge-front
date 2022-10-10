import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Modals from "./Modals";

const Content = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nameAccount, setnameAccount] = useState(0);

  const [saldo, setSaldo] = useState(0);
  const [datos, setDatos] = useState([]);

  const accountSelect = (account, saldo) => {
    setnameAccount(account);
    setSaldo(saldo);
  };

  const url = "http://localhost:8080/api/bank/1";
  const fetchApi = async () => {
    const respuesta = await fetch(url);
    const respuestaJson = await respuesta.json();
    setDatos(respuestaJson);
    console.log(respuestaJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="container-xl mt-4">
        <div className="d-flex justify-content-center p-1 mt-4 fs-4">
          Consulta de saldo
        </div>
        <div className="fw-bold mb-2 text-uppercase d-flex justify-content-center p-4 fs-3">
          Selecciona la cuenta a consultar
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {datos.map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <div className="card-body bg-success">
                  <h5 className="text-white d-flex justify-content-center">
                    {item.nombre_cuenta}
                  </h5>
                  <a
                    className="text-info d-flex justify-content-center fs-5"
                    href="#"
                    onClick={() => {
                      handleShow();
                      accountSelect(item.nro_cuenta, item.saldo);
                    }}
                  >
                    {item.nro_cuenta}
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div class="col">
            <div class="card h-100">
              <div class="card-body bg-success">
                <a
                  className="text-info d-flex justify-content-center fs-5 p-3"
                  href="#"
                >
                  Más opciones
                  <i className="fa fa-backward"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modals
        show={show}
        handleClose={handleClose}
        account={nameAccount}
        saldo={saldo}
      />
    </>
  );
};

export default Content;
