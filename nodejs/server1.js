/*
    Create a LOCALE API to fetch a user token
    This API will build using Node.js with express.js
    that will return a user token
    you will then call this api from your react login page
    and render the component after successfully retreived the User
    token from the local api
  FIRST:
      INSTALL express and cors
      `npm install --save-dev express cors`
      CORS - this library will enable cross origin resource sharing for all routes
    WARNING: do not enable CORS for all routes in a production apps
            This can lead to security vulnerabilities.
*/
// import required modules here
const express = require('express');
const cors = require('cors');
const app = express();
// after creating the app, add cors as a middleware
// first import cors and add to the application by using
// app object - app.use() method
app.use(cors());

// listen to a specific route with app.use
// the first argument is the path that the application will listen to
// and the second argument is a callback function that will run when then
// the application serves the path
// add handler for server homepage
// app.get('/', (req, res) =>{
//   res.send('<h1> HI,<br>I STARTED TO HANDLE YOUR REQUESTS..</h1>')
// })
// add a login handler
app.use('/login', (req, res) => {
  res.send({
    token:'test123'
  });
});

// listen to the port 8080
app.listen(8080, () =>{
  console.log('Server started on port 8080...')
});

// get back to Login.js and edit the react source code
