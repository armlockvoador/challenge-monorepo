module.exports = app => {
    const post = require("../controllers/post.controller");
  
    var router = require("express").Router();
  
    router.get("/findAll", post.findAllPostAndComments);

    router.post("/", post.create);
  
    app.use('/api/post', router);
  };