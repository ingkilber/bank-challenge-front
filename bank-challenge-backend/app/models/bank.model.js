const sql = require("./db.js");

// constructor
const Bank = function(bank) {
  this.nombre = bank.nombre;
  this.apellido = bank.apellido;
  this.clave = bank.clave;
};

//create user
Bank.create = (dataUser, result) => {
  sql.query("INSERT INTO usurios SET ?", dataUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created usuario: ", { id: res.insertId, ...dataUser });
    result(null, { id: res.insertId, ...dataUser});
  });
};

//transfer

Bank.transfer = (id, dataTransfer, result) => {


  sql.query(
    `UPDATE cuenta_usuarios SET saldo = saldo-${dataTransfer.cantidad} where nro_cuenta = ${dataTransfer.origen} and saldo >= ${dataTransfer.cantidad} and id_usuario = ${id};UPDATE cuenta_usuarios SET saldo = saldo+${dataTransfer.cantidad} where nro_cuenta= ${dataTransfer.destino} and id_usuario = ${id};
    INSERT INTO historial_transferencias (monto, id_user_transfer, id_cta_origen, id_cta_destino,nota_transferencia) VALUES (${dataTransfer.cantidad}, ${id}, ${dataTransfer.origen}, ${dataTransfer.destino}, '${dataTransfer.motivo}');`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Bank with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated bank: ", { id: id, ...dataTransfer });
      //result(null, { id: id, ...dataTransfer });
      result(null, { message: "transferencia exitosa"})
    }
  );




};
/*
Bank.transfer = (dataTransfer, result) => {
  console.log(dataTransfer)
  sql.query(`UPDATE cuenta_usuarios SET saldo = saldo-${dataTransfer.cantidad} where nro_cuenta = 
  ${dataTransfer.cuentaOrigen} and saldo >= ${dataTransfer.cantidad}  and id_usuario = 1`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("founount: ", res[0]);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
*/
  /*sql.query("INSERT INTO usurios SET ?", dataTransfer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("transfer detail: ", { id: res.insertId, ...dataTransfer });
    result(null, { id: res.insertId, ...dataTransfer});
  });*/


// find data account
Bank.findById = (id, result) => {
  sql.query(`SELECT a.id_cuenta, a.id_usuario, a.id_tipo_cuenta, a.nro_cuenta, a.saldo,
  b.id_cuenta ,b.nombre_cuenta
  FROM cuenta_usuarios as a
  LEFT JOIN tipos_cuentas as b
  ON a.id_tipo_cuenta = b.id_cuenta WHERE a.id_usuario = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found account: ", res[0]);
      result(null, res);
      return;
    }

    // not found Bank with the id
    result({ kind: "not_found" }, null);
  });
};



Bank.history = (id, result) => {
  sql.query(`SELECT * FROM historial_transferencias WHERE id_user_transfer = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found account: ", res[0]);
      result(null, res);
      return;
    }

    // not found Bank with the id
    result({ kind: "not_found" }, null);
  });
};



module.exports = Bank;