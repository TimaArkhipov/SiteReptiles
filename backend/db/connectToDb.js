import sqlite3 from 'sqlite3'
const sqlite3 = require('sqlite3') 

db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) { 
        console.log('Could not connect to database', err) 
        } else { 
        console.log('Connected to database') 
        } 
})

// export