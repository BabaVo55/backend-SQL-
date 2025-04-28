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
    // res.send(`
    //     <h1>${username}</h1>
    //     <p>${password}</p>
    //     <p>${hashedPassword}</p>
    //     `)
    // save new user and password to database   
    try {
        const insertUser = db.prepare(`INSERT INTO users (username, password)
            VALUES (?, ?)`) // we leave values blank until we run the next step which is to insert.
        const result = insertUser.run(username, hashedPassword);
        
        // When users are create a default todo for them to experiment with.
        const defaultTodo = `Hello Add you first Todo!!!`
        const insertTodo = db.prepare(`INSERT INTO todos (user_id, task)
            VALUES (?, ?)`)
        insertTodo.run(result.lastInsertRowid, defaultTodo);

        // Finally we create a token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET,
             {expiresIn: '24h'});
        
        res.json({token})
        res.sendStatus(200)

    } catch(error){
        console.log(error.message);
        res.sendStatus(503);
    }   
    res.status(202)
})








router.post('/login', (req, res) => {
    const {username, password} = req.body 
    // WHEN EVER WE INTERACT WITH THE DATA BASE WE THROW THAT INTO
        // A TRY - CATCH BLOCK in order to CATCH ANTICIPATED ERRORS
    try {

        const getUser = db.prepare('SELECT * FROM users WHERE username = ?');
        
        const user = getUser.get(username)
        !user && res.status(404).send({message: 'Username false'});

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        !passwordIsValid && res.status(401).send({message: 'Password Incorrect'});
        // const validPassword = getUser.get
        console.log(user)
        const token = jwt.sign({id: user.id}, process.env.jwt_SECRET, {
            expiresIn: '24h'})
    
        res.send({token})
        // res.status(200).send({message: 'username correct'})

    }catch(error){
        console.log(error);
        res.sendStatus(503)
    }
});

export default router;