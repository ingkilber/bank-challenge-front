import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Logo from "../assets/img/NCRLogo.jpg";
import Header from './Header';
import Navbar from './Navbar';

const Transfer = () => {
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
                <h3 className="fw-bold mb-2 text-uppercase d-flex justify-content-center p-2">Realizar transferencia</h3>
                <div className="mb-3">
                  <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                      ¿A quién le querés transferir? <a class="text-success fs-6" href="#">Agregar un nuevo destinatario</a>
                      </Form.Label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Podés buscar por titular o referencia</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                      ¿Qué cuenta vas a usar?
                      </Form.Label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Selecciona tu cuenta</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>¿Cuánto querés transferir?</Form.Label>
                      <Form.Control type="number" placeholder="Ingresa la cantidad a transferir" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                      Motivo
                      </Form.Label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción de transferencia (opcional)"></textarea>
                    </Form.Group>

                   
                    <div className="d-grid">
                      <Button href="./Dashboard" variant="success" type="submit">
                        Aceptar
                      </Button>
                    </div>

                    <div className="d-grid m-4">
                      <Button href="./Dashboard" variant="secondary" type="submit">
                        Volver
                      </Button>
                    </div>       

                  </Form>
                             
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

export default Transfer;