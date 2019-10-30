// Import the database
const db = require('../db/config').db;


async function getTodos() {
  const data = await db.query(
    'SELECT * FROM todoitems'
  )
  return data
}

async function newTodo(todoText) {
  const data = await db.query(
    'INSERT INTO todoitems (todo) VALUES($1)',
    [todoText]
  )
  return data
}

async function findTodo(id) {
  const data = await db.oneOrNone(
    'SELECT * FROM todoitems WHERE id = $1',
    [id]
  )
  return data
}

async function deleteTodo(id) {
  const data = await db.query(
      'DELETE FROM todoitems WHERE id = $1',
    [id]
  )
  return data
}
module.exports = {
  getTodos,
  newTodo,
  findTodo,
  deleteTodo
}