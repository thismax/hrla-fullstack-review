const seedData = require('./seedData');

// TODO create a function to add seed data to DB table
const seed = (table) => {
  seedData.forEach((data) => {
    table.create(data)
    .then(() => console.log('data successfully seeded'))
    .catch(err => console.log('error seding data', err));
  });
};

module.exports = seed;