const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Muscular_groups = sequelize.define('muscular_groups', {
  // Model attributes are defined here
  id_muscular_group: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});


module.exports = Muscular_groups;