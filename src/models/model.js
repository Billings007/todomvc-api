// Import the database
const db = require('../db/config');

const model = {};

model.getTodos = () => {
  return db.query(
    `SELECT * FROM todoitems`
  );
};

model.newTodo = (id, todo) => {
  return db.query(
    `
      INSERT INTO todoitems (id, todo)
      VALUES($1, '$2')
    `,
    [
      id,
      todo
    ]
  );
};

model.findTodo = (id) => {
  return db.oneOrNone(
    ` 
      SELECT * FROM todoitems
      WHERE id = $1
    `,
    [id]
  );
};

model.deleteTodo = (id) => {
  return db.query(
    `
      DELETE FROM todoitems 
      WHERE id = $1
    `,
    [id]
  );
};
module.exports = model;