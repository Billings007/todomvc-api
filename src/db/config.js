const options = {
  query: (e) => {
    console.log(e.query)
  }
}

const pgp = require('pg-promise')(options);
let db
try {
    db = pgp(`postgres://postgres:superMe@localhost:5432/TodoMVC`)
} catch (e) {
  console.error('Failed to start application, DB init.', e)
  process.exit(1)
}

module.exports = {
  pgp,
  db
}