const Sequelize = require('sequelize');

// TODO create a new database using DATABASE_URL from .env
const db = new Sequelize('postgres://dmlpdxnz:pNS67rJevKjYmzY6ocoAkiyrWB3FfMTQ@stampy.db.elephantsql.com:5432/dmlpdxnz')
// TODO anthenticate database
db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
})
.catch((err) => {
  console.error('Unable to connect to the database:', err);
});

module.exports = db;