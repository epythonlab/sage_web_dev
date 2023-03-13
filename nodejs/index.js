// Install express using the following command
// npm install --save express
// requiring the express module
const express = require('express');
const app = express();
/* routing is provided and implementation is easy
   you can directly pass the route name and
   function to the inbuilt function of express,
   mentioning the type of requests as GET or POST
 */
// app.get to handle get requests
app.get('/', (req, res) =>{
  // respond with 'Welcome to sage'
  // when a GET request is made to the homepage
  res.send('<h2> Welcome to Sage</h2>');
  // send a response of various types
});
// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

// Rout handling '/about' request
// This route path will match requests to /about.
app.get('/about', (req, res) =>{

  res.send('<h3> This is about page </h3>');
});
// setting up the server to listen client's requests
app.listen(8080, () =>{
  console.log('server listening on port 8080...');
});
