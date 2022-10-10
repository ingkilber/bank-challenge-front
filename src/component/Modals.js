import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Modals = ({ show, handleClose, account, saldo }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Saldo Cuenta</Modal.Title>{" "}
          <a className="text-success fs-4 p-3">{account}</a>
        </Modal.Header>
        <Modal.Body>
          Monto:{" "}
          <h3 className="text-success d-flex justify-content-center">
            {saldo} $
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
