const express = require('express');
const router = express.Router();
const todoService = require('../models/service')


router.get('/', async (req, res) => {
    try {
        const todoList = await todoService.getTodos()
        res.send(todoList)
    } catch (error) {
        console.log(error),
        res.status(500).json({error})
    }
})


router.post('/:id/:todo', async (req, res) => {
    try {
        const newTodoId = await todoService.newTodo(req.params.id, req.params.todo)
        res.send(newTodoId)
    } catch (error) {
        console.log(error),
        res.status(500).json({error})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedResponse = await todoService.deleteTodo(req.params.id)
        res.send(deletedResponse)
    } catch (error) {
        console.log(error),
        res.status(500).json({error})
    }
})



router.get('/:id', async (req, res) => {
    try{
        const todoId = await todoService.findTodo(req.params.id)
        res.send(todoId)
    } catch (error) {
        console.log(error),
        res.status(500).json({error})
    }
})

  module.exports = router