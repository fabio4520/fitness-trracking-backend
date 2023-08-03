// Create the model for user using sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  // Model attributes are defined here
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  height: { type: DataTypes.INTEGER },
  weight: { type: DataTypes.INTEGER }
}, {
  timestamps: true,
  freezeTableName: true
});

User.sync({ alter: true })

module.exports = User;