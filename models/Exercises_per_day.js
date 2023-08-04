const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Exercises = require('./Exercises');
const Training_days = require('./Training_days');

const Exercises_per_day = sequelize.define('exercises_per_day', {
  // Model attributes are defined here
  id_exercise_per_day: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_exercise: {
    type: DataTypes.INTEGER,
    references: {
      model: Exercises,
      key: 'id_exercise'
    }
  },
  id_training_day: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Training_days,
      key: 'id_training_day'
    }
  },
}, {
  timestamps: false,
  freezeTableName: true
});


module.exports = Exercises_per_day;