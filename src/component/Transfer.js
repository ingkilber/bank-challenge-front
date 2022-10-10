import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";

const Transfer = () => {
  const [datos, setDatos] = useState([]);
  const [cuentaDestino, setcuentaDestino] = useState("");
  const [cuentaOrigen, setcuentaOrigen] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [motivo, setMotivo] = useState("");
  const [iduser, setIduser] = useState(1);
  const [saldotemp, setSaldoTemp] = useState(0);

  const Transfer = async () => {
    let datos = { cuentaOrigen, cuentaDestino, cantidad, motivo, iduser };

    // verificar saldos
    if (saldotemp == 0) {
      alert("Esta cuenta no tiene saldo para tranferir");
      return;
    } else if (saldotemp < cantidad) {
      alert("No tienes suficiente saldo para tranferir");
      return;
    }

    if (
      cuentaDestino == "" ||
      cuentaOrigen == "" ||
      motivo == "" ||
      cantidad == 0
    ) {
      alert("Complete todos los campos");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(datos);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/bank/transfer", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        document.getElementById("transfer").reset();
        setCantidad(0);
        setMotivo("");
      })
      .catch((error) => console.log("error", error));
  };

  const saldoTemp = (account) => {
    //console.log(datos)
    //console.log(account);
    let saldoacc = datos.find((element) => element.nro_cuenta == account);
    setSaldoTemp(saldoacc.saldo);
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
                  <h3 className="fw-bold mb-2 text-uppercase d-flex justify-content-center p-2">
                    Realizar transferencia
                  </h3>
                  <div className="mb-3">
                    <Form id="transfer">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Agregar un nuevo destinatario
                        </Form.Label>
                        <select
                          class="form-select"
                          defaultValue="0"
                          aria-label="Default select example"
                          onChange={(e) => {
                            console.log(e.target.value);
                            setcuentaDestino(e.target.value);
                          }}
                        >
                          <option selected value="0" disabled>
                            Selecciona tu cuenta
                          </option>
                          {datos.map((item, index) => (
                            <option key={index} value={item.nro_cuenta}>
                              {item.nro_cuenta}
                            </option>
                          ))}
                        </select>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          ¿Qué cuenta vas a usar?
                        </Form.Label>
                        <select
                          class="form-select"
                          defaultValue="0"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setcuentaOrigen(e.target.value);
                            saldoTemp(e.target.value);
                          }}
                        >
                          <option selected value="0" disabled>
                            Selecciona tu cuenta
                          </option>
                          {datos.map((item, index) => (
                            <option key={index} value={item.nro_cuenta}>
                              {item.nro_cuenta}
                            </option>
                          ))}
                        </select>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>¿Cuánto querés transferir?</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Ingresa la cantidad a transferir"
                          value={cantidad}
                          onChange={(e) => setCantidad(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Motivo</Form.Label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Descripción de transferencia (opcional)"
                          value={motivo}
                          onChange={(e) => setMotivo(e.target.value)}
                        ></textarea>
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="success" onClick={Transfer}>
                          Aceptar
                        </Button>
                      </div>

                      <div className="d-grid m-4">
                        <Button
                          href="./Dashboard"
                          variant="secondary"
                          type="submit"
                        >
                          Volver menú principal
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
};

export default Transfer;
