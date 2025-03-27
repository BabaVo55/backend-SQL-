import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';


const router = express.Router();

router.post('/register',(req, res) => {
    const {username, password} = req.body; 
    const hashedPassword = bcrypt.hashSync(password, 8);
    console.log(hashedPassword)
    console.log(username, password)
    res.send(`
        <h1>${username}</h1>
        <p>${password}</p>
        <p>${hashedPassword}</p>
        `)
    // save new user and password to database   
    try {

    } catch(error){
        console.log(error.message);
        res.sendStatus(500);
    }   
        
        
        
    res.status(202)
})








router.post('/login', (req, res) => {
    const {username, password} = req.body 
});

export default router;