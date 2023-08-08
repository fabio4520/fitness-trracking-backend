const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Training_plans = require('./Training_plans');
const Exercises = require('./Exercises');

const Training_plans_exercises = sequelize.define('training_plans_exercises', {
  // Model attributes are defined here
  id_training_plan_exercise: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_training_plan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Training_plans,
      key: 'id_training_plan'
    }
  },
  id_exercise: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Exercises,
      key: 'id_exercise'
    }
  },
}, {
  timestamps: false,
  freezeTableName: true
});


module.exports = Training_plans_exercises;