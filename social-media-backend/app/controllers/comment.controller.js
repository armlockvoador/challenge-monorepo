const Comment = require("../models/comment");
const Post = require("../models/post");
const { Op } = require("sequelize");

exports.create = (req, res) => {
  if (!req.body.userId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const comment = {
    userId: req.body.userId,
    postId: req.body.postId,
    description: req.body.description
  };

  Comment.create(comment)
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

  Comment.findAll({
    where: {
      userId: {
        [Op.eq]: id
      }
    }, include: [{
      model: Post
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