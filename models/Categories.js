const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Categories = sequelize.define('categories', {
  // Model attributes are defined here
  id_category: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});


module.exports = Categories;