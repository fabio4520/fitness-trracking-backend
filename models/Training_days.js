const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./Users');

const Training_days = sequelize.define('training_days', {
  // Model attributes are defined here
  id_training_day: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_user'
    }
  },
  training_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Training_days;