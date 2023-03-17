/*
  CREATE TOUES USING ExpressJS
  - set up routes(REST APIs) for
    - CREATE
    - READ
    - UPDATE and
    - DELETE data from MongoDB
  These routes help you to manage your data
*/

// import modules
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// import Applicant Model
const applicantSchema = require('../models/Applicant');

// create applicant
router.post('/create-applicant', (req, res, next) =>{
  applicantSchema.create(req.body, (error, data) =>{
    if (error){
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// export the router
module.exports = router
