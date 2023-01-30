// import Sequelize from "sequelize";
import express, { json } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';

import { postValidation, userValidation, reactionValidation } from './validations.js';
import db, {openConnection, closeConnection} from './db.js';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js'
import * as ReactionController from './controllers/ReactionController.js'
import * as PostController from './controllers/PostController.js'



// var app = express();

const __dirname = path.resolve();
var dir = path.join(__dirname, 'uploads');


const PORT = process.env.PORT || 3001;
const app = express();
// app.use(express.static(dir));

// const storage = multer.diskStorage({
//     destination: (_, _, cb) => {
//         cb(null, 'uploads');
//     },
//     filename: (_, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage }); 

app.use(cors())
app.use(fileUpload())
// app.use(express.static('')) //Указать откуда загружать картинки
app.use(express.json())
app.use('/uploads', express.static('uploads'));
openConnection()
startApp(PORT);

// User
app.post('/auth/login', UserController.login);
app.post('/auth/register', userValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

// //File
// app.post('/upload', upload.single('image'), (req, res) => {
//     res.json({
//         url: `/uploads/${req.file.originalname}`,
//     });
// })

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