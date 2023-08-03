const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

module.exports = sequelize;