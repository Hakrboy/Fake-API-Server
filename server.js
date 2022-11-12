const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy')
const app = express();
const fs = require('fs');
const FileStreamRotator = require('file-stream-rotator');

const morgan = require('morgan')
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const corsOptions = {
 
};

const logDirectory = path.join(__dirname, 'Logs')
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
const accessLogStream = FileStreamRotator.getStream({
  date_format: 'DD-MM-YYYY',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})

app.use(cors(corsOptions));
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use(morgan('dev'))

// app.use(errorController)
const router = require('./routes')();

// for micro service architectures 
// app.use('/attribute',proxy('http://localhost:3001'))


app.use('/', router);

// to return error for endpoint that doesn't exist
// app.all('*',(req,res,next) =>{
//     next(new AppError(`Requested URL ${req.path} not Avaialble`,404));
//     })
  

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode|| 500;
    res.status(statusCode).json({
      success: 0,
      message: err.message,
      stack: err.stack
    }) 
  })

const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log(`App is working on Port ${port}`)
});


