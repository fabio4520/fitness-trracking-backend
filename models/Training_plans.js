const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Training_plans = sequelize.define('training_plans', {
  // Model attributes are defined here
  id_training_plan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  plan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});


module.exports = Training_plans;