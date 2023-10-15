const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'healthtrackpro.db',
});

module.exports = sequelize;
