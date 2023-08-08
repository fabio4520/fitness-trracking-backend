const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Users = require('./Users');
const Training_plans = require('./Training_plans');

const Users_training_plans = sequelize.define('users_training_plans', {
  // Model attributes are defined here
  id_user_training_plan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id_user'
    }
  },
  id_training_plan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Training_plans,
      key: 'id_training_plan'
    }
  },
}, {
  timestamps: false,
  freezeTableName: true
});


module.exports = Users_training_plans;