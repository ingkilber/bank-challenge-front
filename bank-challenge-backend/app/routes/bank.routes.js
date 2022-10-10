module.exports = app => {
    const bank = require("../controllers/bank.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", bank.create);

    router.get("/:id", bank.findOne);

    router.post("/transfer", bank.transfer);

    router.get("/history/:id", bank.history);
  
    app.use('/api/bank', router);
  };