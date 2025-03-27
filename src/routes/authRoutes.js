import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';


const router = express.Router();

router.post('/register',(req, res) => {
    const {username, password} = req.body;
    console.log(username, password)
    res.status(202)
    res.send(`
        <h1>${username}</h1>
        <p>${password}</p>
        `)
})








router.post('/login', (req, res) => {
    const {username, password} = req.body 
});

export default router;