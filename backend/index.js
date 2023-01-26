// import Sequelize from "sequelize";
import express, { json } from 'express';
// import path from 'path';

import { registerValidation } from './validations.js';
import db, {openConnection, closeConnection} from './db.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js'

// const __dirname = path.resolve();
app.use(express.json())
const PORT = process.env.PORT || 3000;
const app = express();
openConnection()
startApp(PORT);


app.post('/auth/login', UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

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