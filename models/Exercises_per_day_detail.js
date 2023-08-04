const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Exercises_per_day = require('./Exercises_per_day');

const Exercises_per_day_detail = sequelize.define('exercises_per_day_detail', {
  // Model attributes are defined here
  id_exercise_per_day_detail: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_exercise_per_day: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Exercises_per_day,
      key: 'id_exercise_per_day'
    }
  },
  set_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight_kg: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  weight_lbs: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  repetitions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rir: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Exercises_per_day_detail;