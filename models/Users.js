// Create the model for user using sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Users = sequelize.define('user', {
  // Model attributes are defined here
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    isEmail: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: { type: DataTypes.INTEGER },
  height: { type: DataTypes.INTEGER },
  weight: { type: DataTypes.INTEGER },
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

module.exports = Users;