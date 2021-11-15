const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}
// Restrict the types of data that can be posted.  In this case, strings.
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize
  }
);

module.exports = Post;
