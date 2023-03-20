/*
  DEFINE Mongoose SCHEMA:
  - create the schema for interacting with MongoDB schema
  - models directory contains schema related files
  INSTALL:
    - npm install body-parser cors mongoose
    - npm i -D nodemon

   - you can also install nodemon as dev to
    automate the server restarting process
    while modifying the server code

*/
// import mongoose module
/* Mongoose is an object data modeling(ODM) library for
 - MongoDB and Node.js
 - it manages relationships between data,provides schema validation,
  - and is used to translate between objects in code and
  the representation of those objects in MongoDB.
*/
const mongoose = require('mongoose');
/*
  A schema is a JSON object that defines the structure
  and contents of your data
*/
const Schema = mongoose.Schema;

let applicantSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone_number: {
    type: String
  },
  gender: {
    type: String
  },
  date_updated: {
    type: Date, default: Date.now
  }
  },
  {
    // create collocation
    collection: 'applicants'
})
// export the schema
module.exports = mongoose.model('Applicant', applicantSchema)
// CREATE routes
// - create applicant.routes.js
