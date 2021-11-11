const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}


Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false        // Does not allow the comment to be empty
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;