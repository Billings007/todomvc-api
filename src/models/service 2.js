//Couldn't figure out why I couldn't GET and made this thinking it might help


const todoModel = require('../models/model')

const todoService = {};

todoService.getTodos = () => {
    const todos = todoModel.getTodos()
    return todos
};

todoService.newTodo = (id, todo) => {
    const newTodoResponse = todoModel.newTodo(id, todo)
    return newTodoResponse[0]
};

todoService.deleteTodo = (id) => {
    const deleteTodoResponse = todoModel.deleteTodo(id)
    return deleteTodoResponse[0]
};

todoService.findTodo = (id) => {
    const todo = todoModel.findTodo(id)
    return todo
}

module.exports = todoService;


