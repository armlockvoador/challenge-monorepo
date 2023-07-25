const User = require('./user');
const Post = require('./post');
const Sequelize = require('sequelize');
const database = require('../config/db.config');

const Comment = database.define("comment", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING
    }
  });

User.hasMany(Comment, {
  foreignKey: 'userId'
});

Post.hasMany(Comment, {
  foreignKey: 'postId'
});

module.exports = Comment;