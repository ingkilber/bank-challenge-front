import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Logo from "../assets/img/NCRLogo.jpg";
import Header from './Header';
import Navbar from './Navbar';

const Record = () => {
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
                <h3 className="fw-bold mb-2 text-uppercase d-flex justify-content-center p-2">Histórico de movimientos</h3>
                <div className="mb-3">
                  <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                      ¿Qué cuenta vas a usar?
                      </Form.Label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Selecciona tu cuenta</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </Form.Group>

                    <div class="container mt-4 p-0">
  <table class="table table-bordered table-sm">
    <thead>
      <tr className="text-center">
        <th>Fecha</th>
        <th>Detalle</th>
        <th>Importe</th>
      </tr>
    </thead>
    <tbody className="text-center">
      <tr>
        <td>30/10/22</td>
        <td>Internet</td>
        <td>4.000 $</td>
      </tr>
      <tr>
      <td>05/10/22</td>
        <td>Servicios</td>
        <td>40.00$</td>
      </tr>
      <tr>
      <td>09/10/22</td>
        <td>Alquiler</td>
        <td>60.00$</td>
      </tr>
    </tbody>
  </table>
</div>

                    
                    <div className="d-grid p-1">
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

export default Record;