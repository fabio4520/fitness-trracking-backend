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
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  timestamps: true,
  freezeTableName: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Body_weight;



