// import Sequelize from "sequelize";
import express, { json } from 'express';
// import path from 'path';

import { pageValidation, userValidation, reactionValidation } from './validations.js';
import db, {openConnection, closeConnection} from './db.js';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js'
import * as ReactionController from './controllers/ReactionController.js'
import * as PageController from './controllers/PageController.js'

// const __dirname = path.resolve();
const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json())
openConnection()
startApp(PORT);


app.post('/auth/login', UserController.login);
app.post('/auth/register', userValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/reactions', ReactionController.getAll)
app.get('/reactions/:id', ReactionController.getOne)
app.post('/reactions', checkAuth, reactionValidation, ReactionController.create)
app.delete('/reactions/:id', checkAuth, ReactionController.remove)
app.patch('/reactions/:id', checkAuth, ReactionController.update)

app.get('/pages', PageController.getAll)
app.get('/pages/:id', PageController.getOne)
app.post('/pages', pageValidation, PageController.create)
app.delete('/pages/:id', PageController.remove)
app.patch('/pages/:id', PageController.update);

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