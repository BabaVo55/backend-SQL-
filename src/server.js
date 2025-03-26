// const express = require('express');
import express from 'express';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
// import authRoutes from './routes/authRoutes.js';
// import todoRoutes from './routes/todoRoutes.js';

const app = express();

const PORT = process.env.PORT2 || 3003;

// Get the file path from the URL of the current module;
const __filename = fileURLToPath(import.meta.url);
// Get directory name from path;
const __dirname = dirname(__filename)

//Middleware
app.use(express.json)
// Serves the HTML file from the /public directory
// Tells express to serve all file from the public folder as static assets/ file.
app.use(express.static(path.join(__dirname, "../public")))

// Serving up the HTML file from th  e /public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
console.log('yooo g')

//routes

// app.use('/api', authRoutes)
// app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log('backend connected')
})