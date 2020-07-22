const express = require('express')
const todo = require('../controllers/TodoController')
const router = express.Router()

router.post('/savetodo', todo.savetodo)
router.get('/gettodo',todo.gettodo)
router.get('/delete/:id',todo.deltodo)

module.exports = router