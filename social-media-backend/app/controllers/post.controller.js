const Post = require("../models/post");
const Comment = require("../models/comment");
const { Op } = require("sequelize");

exports.create = (req, res) => {
    if (!req.body.userId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const post = {
      userId : req.body.userId,
      title: req.body.title,
      description: req.body.description,
      viewAmount: req.body.viewAmount,
      likes: req.body.likes,
      disliked: req.body.disliked    
    };
  
    Post.create(post)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Post."
        });
      });
  };

exports.findPostAndCommentsByUserId = (req, res) => {
  if (!req.params.userId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const id = req.params.userId;

  Post.findAll({
    where: {
      userId: {
        [Op.eq]: id
      }
    }, include: [{
      model: Comment
    }]
  }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Post."
      });
    });
};
