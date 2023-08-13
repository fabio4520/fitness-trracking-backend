const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Exercises = require('./Exercises');
const Muscular_groups = require('./Muscular_groups');

const Exercises_muscular_groups = sequelize.define('exercises_muscular_groups', {
  // Model attributes are defined here
  id_exercise_muscular_group: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_exercise: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Exercises,
      key: 'id_exercise'
    }
  },
  id_muscular_group: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Muscular_groups,
      key: 'id_muscular_group'
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});


module.exports = Exercises_muscular_groups;
