const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Muscular_groups = require('./Muscular_groups');

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

module.exports = Exercises;
