const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./Users');

const Body_weight = sequelize.define('body_weight', {
  // Model attributes are defined here
  id_body_weight: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  weight: { type: DataTypes.DECIMAL },
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id_user'
    }
  }
}, {
  timestamps: true,
  freezeTableName: true
});

module.exports = Body_weight;



