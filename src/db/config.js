require('dotenv').config()
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('financas', 'root', process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = {sequelize}