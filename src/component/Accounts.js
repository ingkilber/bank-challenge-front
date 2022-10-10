import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Logo from "../assets/img/NCRLogo.jpg";
import Header from './Header';
import Navbar from './Navbar';

const Accounts = () => {
  return (
    <div>
            <Header />
    <Navbar />
    <Container>
      <Row className="d-flex justify-content-center align-items-center p-4">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-success"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h3 className="fw-bold mb-2 text-uppercase d-flex justify-content-center p-2">Selecciona tu cuenta</h3>
                <div className="mb-3">

                <Dropdown className="d-flex justify-content-center align-items-center p-4">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Consultar Cuentas
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cuenta Corrientes</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cuenta de ahorro</Dropdown.Item>
        <Dropdown.Item className="d-flex justify-content-center p-2" href="#/action-3">Otras ...</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
                    <div className="d-grid m-4">
                      <Button href="./Dashboard" variant="secondary" type="submit">
                      Volver menú principal
                      </Button>
                    </div>                  

                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Accounts;