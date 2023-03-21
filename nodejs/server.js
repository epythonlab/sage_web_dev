/*
  configure server
    -create the server.js in the nodejs project
    root directory
*/
// import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const connectDB  = require('./database/config')

// import routes of applicant
const applicantRoute = require('./routes/applicant.routes');

// Connect Database
connectDB();

// create express object
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use('/applicants', applicantRoute);


// define to listen to the port
const port = process.env.PORT || 4000;
const server = app.listen(port, () =>{
  console.log('Server connected to port '+ port)
} )

// define server errors
app.use((req, res, next) => {
  res.status(404).send('Error 404!')
})

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})

// now start the server by typing
// npm start - in the nodejs root directory
