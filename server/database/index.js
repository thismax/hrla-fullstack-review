const Sequelize = require('sequelize');
const db = require('./config');
const seed = require('../seeding');

const Question = db.define('Question', {
  frame: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer2: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer3: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  correct: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Question.sync({ force: true })
  .then(() => seed(Question));

module.exports = {
  Question,
};
