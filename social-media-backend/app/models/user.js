const Sequelize = require('sequelize');
const database =  require('../config/db.config');

const User = database.define("user", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });

    module.exports = User;
