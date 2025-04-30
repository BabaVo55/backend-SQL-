import express from 'express';
import db from '../db.js';


const router = express.Router()
// Get all todos of user
router.get('/', (req, res) => {
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?');
    const todos = getTodos.all(req.userId)
    res.json(todos)
})
   
// Create new Todo
router.post('/', (req, res) => {
    let {task} = req.body;

    const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES
        (?, ?)`)
        const result = insertTodo.run(req.userId, task);

        res.json({id: result.lastInsertRowid, task, completed: 0})
})

// Update a todo
router.put('/:id', (req, res) => {
    const { completed } = req.body; // within the fetch request body
    const { id } = req.params; // within the Dynamic Url
    const { page } = req.query // Proceeding the ? mark in the Url e.g ?page=3

    const updatedTodo = db.prepare(`UPDATE todos SET completed = ? WHERE id = ?`)
    updatedTodo.run(completed, id);

    res.json({message: "Todo completed"})
})

router.delete('/:id', (req,res) => {
    
})
export default router;