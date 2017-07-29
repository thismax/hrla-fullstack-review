const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
});

console.log('Successfully connected to the DB!');

module.exports = db;
