module.exports = app => {
    const post = require("../controllers/post.controller");
  
    var router = require("express").Router();
  
    router.get("/:userId", post.findPostAndCommentsByUserId);

    router.post("/", post.create);
  
    app.use('/api/post', router);
  };