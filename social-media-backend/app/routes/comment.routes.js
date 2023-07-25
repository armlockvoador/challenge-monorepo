module.exports = app => {
    const comment = require("../controllers/comment.controller");
  
    var router = require("express").Router();
  
    router.post("/", comment.create);
  
    app.use('/api/comment', router);
  };