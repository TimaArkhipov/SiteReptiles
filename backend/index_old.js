import express, { json } from 'express'
import jwt from 'jsonwebtoken'
import { requestTime, logger } from './middlewares.js'
import path from 'path'

// import db, { openConnection, closeConnection } from './connDb.js'
// import { runMigrations} from './migration.js'
// import User from './models/User.js';
// import sqlite3 from 'sqlite3'
// import router from './router.js'
// import { fileURLToPath } from 'url'
// const __dirname = dirname(__filename)
// console.log('__dirname ->' + __dirname);
//console.log(__filename);

import User from  


async function bootstrap() {
    try {
        await openConnection()
        .then(() => console.log('Connected'))
        .catch(() => console.log('Error(DB): ', err));
        
        // await runMigrations();
        

        await closeConnection();
    } catch (err) {
        console.error(err);
    }
}

bootstrap();

const __dirname = path.resolve();
const PORT = process.env.PORT || 3001;
const app = express();
// const {Client} = require('pg');

// const client = new Client({
//     user: 'postrges',
//     host: 'localhost',
//     database: 'siteDB',
//     password: '',
//     port: 5432,
// });

// app.use(express.static(path.resolve(__dirname, 'backend')))
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'backend/ejs'))
    // console.log('views ->' + app.get('views'))
app.use(requestTime)
app.use(express.json())

// app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname, 'ejs'));
// console.log(app.get('view'));

// app.use(express.json());
// app.use('/api', router);
// //console.log(__dirname);
// //console.log('log path.join ->' + path.join(__dirname, 'front'));
// app.use(express.static(path.join(__dirname, 'front')));

// app.get('/api',(req, res) => {
//     // res.render('index', {title: 'Main page'});
//     res.json({
//         message: "Hello from backend express.js"
//     })
// });

app.get('/', (req, res) => {
    res.render('index', { title: 'Main page' });
    // res.json({
    //     message: "Hello from backend express.js"
    // })
});

app.post('/auth/login', (req, res) => {
    console.log(req.body);

    if (req.body.email == 'test@test.ru')
    {

        const token = jwt.sign(
            {
                email: req.body.email,
                fullName: 'Тимофей Архипов'
            },
            'fggndj42321',
            );
            
    }

    res.json({
        success: true,
        token,
    });
})

// async function startApp() {
//     try {
//         app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
//     } catch(e) {
//         console.log(e);
//     }
// }
// startApp()
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));