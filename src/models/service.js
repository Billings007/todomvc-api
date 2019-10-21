//Couldn't figure out why I couldn't GET and made this thinking it might help
const todoModel = require('../models/model')


async function getTodos() {
    const todos = todoModel.getTodos()
    return todos
}

async function newTodo(id, todo) {
    const newTodoResponse = todoModel.newTodo(id, todo)
    return newTodoResponse[0]
}

async function deleteTodo(id) {
    const deleteTodoResponse = todoModel.deleteTodo(id)
    return deleteTodoResponse[0]
}

async function findTodo(id) {
    const todo = todoModel.findTodo(id)
    return todo
}

module.exports = {
    getTodos,
    newTodo,
    deleteTodo,
    findTodo
}
