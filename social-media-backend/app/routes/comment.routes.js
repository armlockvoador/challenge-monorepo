module.exports = app => {
    const comment = require("../controllers/comment.controller");
  
    var router = require("express").Router();

    router.get("/:userId", comment.findPostAndCommentsByUserId);
  
    router.post("/", comment.create);
  
    app.use('/api/comment', router);
  };