const User = require('./user');
const Sequelize = require('sequelize');
const database = require('../config/db.config');

const Post = database.define("post", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.STRING
    },
    viewAmount: {
      type: Sequelize.INTEGER
    },
    likes: {
      type: Sequelize.INTEGER
    },
    disliked: {
      type: Sequelize.INTEGER
    }
  });

User.hasMany(Post, {
  foreignKey: 'userId'
});

module.exports = Post;