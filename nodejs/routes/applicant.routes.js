/* routes/applicant.routes.js
  CREATE ROUES USING ExpressJS
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

// create applicant data
router.post('/application', (req, res) => {
  applicantSchema.create(req.body)
    .then(data => res.json({ msg: 'Data added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this data' }));
});

// url: http://localhost:4000/applicants/application


// read applicants data
router.get('/list-applicants', (req, res) => {
  applicantSchema.find()
    .then(data => res.json(data))
    .catch(err => res.status(404).json({nodatafound: 'No data found' }));
});

// url: http://localhost:4000/applicants/list-applicants

/* Update applicant data
  First: get a single applicant data by ID
*/
router.get('/update-applicant/:id', (req, res) =>{
  // findById() takes a single parameter, the document id.
  // it returns a promise that resolves to the Mongoose document
  // if MongoDB found a document with the given id
  // or null if no document was found.
  applicantSchema.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(404).json({dataError: 'Data not found in this id'}))
});
// url: http://localhost:4000/applicants/update-applicant/document_id

// update a specified applicant data using PUT API method
router.put('/update-applicant/:id', (req, res) => {
  applicantSchema.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json({ msg: 'Data updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update this data' }));
});

/* Delete a specific applicant data by id requested by api */
router.delete('/delete-applicant/:id', (req, res) => {
  applicantSchema.findByIdAndRemove(req.params.id, req.body)
    .then(data => res.json({msg:'Data is successfully deleted.'}))
    .catch(err => res.status(400).json({error: 'Data not deleted'}));
});

// export the router
module.exports = router
