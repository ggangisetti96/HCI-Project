
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const config = require('./config/dbConfig');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// dependencies 
const app = express();

// create mysql connection
const db = mysql.createConnection(config)

// // connect to mysql
db.connect(err =>{
   if(err) {
      throw err;
   }
   console.log('db connection established!');
})

// middleware
app.use(express.static('view'));
app.use(cors());
app.use(express.json());
app.use(function(req,res,next){
   req.db = db; 
   next();
});

// routes(APIs)
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);


// Start Server 
app.listen(3100, () => {
   console.log('Server is running on port 3100!');
});