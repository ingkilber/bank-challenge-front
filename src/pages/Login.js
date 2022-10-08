import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Logo from "../assets/img/NCRLogo.png"

const Login = () => {
  return (
    <div>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-success"></div>
          <Card className="shadow">
            <Card.Body>

            <img className="mx-auto d-block" src={Logo} alt="logo" />

              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase d-flex justify-content-center">¡Hola! Te damos la bienvenida</h2>
                <p className='d-flex justify-content-center'>Ingresá tus datos para operar</p>
                <div className="mb-3">
                  <Form>                  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                      Ingresá tu usuario
                      </Form.Label>
                      <Form.Control type="email" placeholder="Usuario" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Ingresá tu clave</Form.Label>
                      <Form.Control type="password" placeholder="Clave" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                      <p className="small">
                        <a className="text-success" href="#!">
                        ¿Se te olvidó tu contraseña?
                        </a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button href="./Dashboard" variant="success" type="submit">
                        Ingresar
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                    ¿No tienes una cuenta?{" "}
                      <a href="{''}" className="text-success fw-bold">
                      Inscribirse
                      </a>
                    </p>
                  </div>                  
                </div>
              </div>
            </Card.Body>
          </Card>

          <p className="mt-4 mb-0 text-success text-center">
                  Por tu seguridad, nunca compartas los datos de acceso ni
códigos de validación de tu Home Banking.
                    </p>

        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Login;