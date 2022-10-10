const Bank = require("../models/bank.model.js");

// Create and Save a new Bank
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const usuario = new Bank({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    clave: req.body.clave,
  });


  Bank.create(usuario, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bank."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Bank.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Bank with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Bank with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};


exports.history = (req, res) => {
  Bank.history(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Bank with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Bank with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.transfer = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  let cantidad = req.body.cantidad;
  let origen = req.body.cuentaOrigen;
  let destino = req.body.cuentaDestino;
  let motivo = req.body.motivo;
  let datos = {cantidad: cantidad, destino: destino, motivo: motivo, origen: origen}

  Bank.transfer( req.body.iduser, datos,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
           // message: `Not found Bank with id ${req.body.iduser}.`
            message: `verifique su saldo.`
          });
        } else {
          res.status(500).send({
            message: "Error updating transfer with id " + req.body.iduser
          });
        }
      } else res.send(data);
    }
  );
};