const express = require('express');
const router = express.Router();
const model = require('../models/model')


router.get('/', (req, res) => {
    model.getTodos()
    .then(todoList => {
        res.json({
            message: 'Success',
            data: todoList
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

router.post('/:id/:todo', (req, res) => {
    //const entry = service.newTodo(req.params.id, req.params.todo)
    //.then(res.send(entry))
    model.newTodo(req.params.id, req.params.todo)
    .then(todo => {
        res.json({
            data: todo
        });
        res.status(201),
        res.send(data)
    }
    )
    .catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

router.delete('/:id', (req, res) => {
    //const entry = service.deleteTodo(req.params.id, req.params.todo)
    //.then(res.send(entry))
    model.deleteTodo(req.params.id)
    .then(todo => {
        res.json({
            data: todo
        });
        res.status(201),
        res.send(data)
    }
    )
    .catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

router.get('/:id', (req, res) => {
    model.findById(req.params.id)
    .then(todo => {
      res.json({
        message: "Success",
        data: todo
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({err});
    });
  });

  module.exports = router;