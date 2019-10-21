const pgp = require('pg-promise')();
let db
const {DB, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT} = process.env
try {
  db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST || 'localhost'}:${DB_PORT || 5432}/${DB}`)
} catch (e) {
  console.error('Failed to start application, DB init.', e)
  process.exit(1)
}

module.exports = {
  pgp,
  db
}