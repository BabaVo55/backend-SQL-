import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db';
const router = express.Router();




router.post('/register', (req, res) => {
    // const {username, password} = req.body

    // db.prepare(`
    //         INSERT 
    //     `)
})


router.post('/login', (req,res) => {

})


export default router