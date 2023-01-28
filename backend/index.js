// import Sequelize from "sequelize";
import express, { json } from 'express';
// import path from 'path';

import { postValidation, userValidation, reactionValidation } from './validations.js';
import db, {openConnection, closeConnection} from './db.js';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js'
import * as ReactionController from './controllers/ReactionController.js'
import * as PostController from './controllers/PostController.js'

// const __dirname = path.resolve();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json())
openConnection()
startApp(PORT);

// User
app.post('/auth/login', UserController.login);
app.post('/auth/register', userValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

// Reaction
app.get('/reactions', ReactionController.getAll)
app.get('/reactions/:id', ReactionController.getOne)
app.post('/reactions', checkAuth, reactionValidation, ReactionController.create)
app.delete('/reactions/:id', checkAuth, ReactionController.remove)
app.patch('/reactions/:id', checkAuth, ReactionController.update)

// Post
app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
app.post('/posts', postValidation, PostController.create)
app.delete('/posts/:id', PostController.remove)
app.patch('/posts/:id', PostController.update);

async function startApp(port) {
    try {
        app.listen(port, (err) => {
            console.log('SERVER STARTED ON PORT ' + port)
            if (err) {
                return console.log(err);
            }
        });
    } catch(e) {
        console.log(e);
    }
}

// app.get('/', (req, res) => {
//     res.send('<h1>Hello back</h1>');
//     // res.render('index', { title: 'Main page' });
//     // res.json({
//     //     message: "Hello from backend express.js"
//     // })
// });

// app.get('/db', (req, res) => {
//     res.send(users);
//     // res.json(users);
//     // res.render('index', { title: 'Main page' });
//     // res.json({
//     //     message: "Hello from backend express.js"
//     // })
// });