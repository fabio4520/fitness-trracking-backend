const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Exercises = sequelize.define('exercises', {
  // Model attributes are defined here
  id_exercise: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Exercises;

