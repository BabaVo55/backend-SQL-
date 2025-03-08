// const express = require('express');
// The address if this server connected to the network is: 
// URL -> http://localhost:8081
// IP -> 127.0.0.1:8081 : 8080
import express from 'express';
const app = express();


const PORT = process.env.PORT || 8080;

//Middleware;
    //Configures our server to intercept incoming requests and 
        // interprets it. Security measure in between the interactions
            //  just before the request hit the backend 
app.use(express.json());

let data = {name:['Ethem']}

// TYPE1
// Website endpoints -> html to be sent back

app.get('/', (req, res) => {
    console.log('home endpoint arrived')
    res.send(`
                <body style='background: pink; color: blue'>
                    <p style="color: red; font">${JSON.stringify(data)}</p>
                </body>
            `)
})
// testing ignore
app.get('/ethemswebsite/dashboard', (req, res) => {
    console.log('dashboard endpoint found')
    res.send('<h1>Dashboard</h1><button>Press me</button>')
})

app.get('/api/data', (req, res) => {
    console.log('this is for data')
    res.send('which end is this')
})

// someone wants to create a user (for example when they 
    // click sign up button)
// the user clicks the sign up button after their credentials,
    // and their browser is wired up to send out a network
    // request to the server to handle that actions
app.post('/api/data2', (req, res) => {
    const newData = req.body;
    console.log(newData)
    console.log(data)
    data.name.push(newData.name)
    console.log(data)
    res.send(`<h1>${data.name}</h1>`)
    res.sendStatus(201);
 
})


// TYPE2
// API endpoints - data to be sent/verified/checked and response sent back (non visual)


app.get('/api/data', (req, res) => {
    // const desiredData = req.body;
    res.send(`<h1>${data.name}</h1>`)   
})

console.log('hellow wordl')
console.log('serverSide rendering nigga')
app.listen(PORT, () => console.log('8080 plugged in'))