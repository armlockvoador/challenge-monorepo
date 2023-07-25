module.exports = app => {
    const user = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    router.post("/", user.create);
  
    app.use('/api/user', router);
  };