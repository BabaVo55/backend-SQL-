import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';
const router = express.Router();



// register a new user endpoint /auth/register
router.post('/data', (req, res) => {
    const {username, password} = req.body
    console.log(username, password)
    res.sendStatus(201)
    // db.prepare(`
    //         INSERT 
    //     `)
})


// router.post('/login', (req,res) => {

// })


export default router