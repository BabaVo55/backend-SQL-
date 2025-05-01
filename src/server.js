// Server imports
import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
//           ----------- 
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js';

//           -----------
// Server Setup
const app = express();
const PORT = process.env.PORT2 || 5000;


//---------------------------------------

// Html, Css & fantaCss path serving.

// Get the file path from the URL of the current module;
const __filename = fileURLToPath(import.meta.url);

// GEt the directory name from file path;
const __dirname = dirname(__filename);

// Middleware
app.use(express.json())

// Serves the HTML file from the /public directory
// Tells express to serve all files from the public folder as static assets / files
    // Any request for the css files will be resolve to the public directory.
app.use(express.static(path.join(__dirname, "../public")))

// Serving up the HTML file from the /public Directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})



//---------------------------------------



// ROutes
app.use('/auth',  authRoutes)
// auth middleware intercepts all requests directed to '/todo' route - endpoint
app.use('/todos', authMiddleware, todoRoutes)



//---------------------------------------


// Livelihood of Server!!!
app.listen(PORT, () => {
    console.log('hello backend: Port: ' + PORT)
})


// We will now begin phase 4 where 3 things will need changing to reach enterprize  level:
// 1. The Database - SqlLight - MySql or PostgresSql
// 2. No longer writing out custom Sql queries - will be using a ORM (Object Relational Mapper)
//  / Its a middleman between our javascript and Postgres ->PRISMA<-
// 3. We will dockerize our entire project, in chapter 3 we had our database and server as the same entity, in This phase it will
// / be two separate environments, that means our server will need to communicate with external database both will need independent docker
// / / environment. meaning if server breaks it does'nt mean your data base has to completely restart. our database will be able to
// / / / persist data that much more effectively. THIS IS BEST PRACTICE!!!!