// Import the database
const db = require('../db/config');


async function getTodos() {
  const data = await db.query(
    'SELECT * FROM todoitems'
  )
  return data
}

async function newTodo(id, todoText) {
  const data = await db.query(
    'INSERT INTO todoitems (id, todo) VALUES($1, $2)',
    [
      id,
      todoText
    ]
  )
  return data
}

async function findTodo(id) {
  const data = await db.oneOrNone(
    'SELECT * FROM todotiems WHERE id = $1',
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