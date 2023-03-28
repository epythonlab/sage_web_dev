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

// import Applicant Model and Course model
const applicantSchema = require('../models/Applicant');
const courseSchema = require('../models/Course');

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

// /* api route to delete multiple data by ids */
// router.delete('http://localhost:4000/applicants/deleteAll', (req, res) =>{
//   //console.log(req.body)
//   applicantSchema.remove({'_id': {'$in':req.body}})
//     .then(data => res.json({msg:'Data is successfully deleted.'}))
//     .catch(err => res.status(400).json({error: 'Data not deleted'}));
// });

// the newly registered applicant proceeds to register for new course
/***
 * @action Register for course
 * @route http://localhost:4000/applicants/registerCourse
 * @method POST
*/
router.post('/registerCourse', (req, res) => {
  courseSchema.create(req.body)
    .then(data => res.json({ msg: 'Data added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this data' }));
});

/* 
  aggregation pipeline: 
    join applicant and course collections and get the data
    Test on terminal: 
       db.applicants.aggregate([
       { $lookup: {
        from: 'course',  // collection to join
        localField: '_id', // field of the input documents
        foreignField: 'applicant', // field of the from collection
         as: 'course' // output array field
         } }])
      The above aggregation pipeline joins the two collections
      on the same local and foreign object
    route: http://localhost:4000/applicants/applicantDetail/id

    For api request: to get details of a single applicant
    use $match
*/
// the id passed through the api is a string
// it should be converted to object id 
// define the new objectid from mongoose as below and cast the id
//to the ObjectID
const  ObjectID = require('mongoose').Types.ObjectId;
router.get('/applicantDetail/:id', (req, res) =>{
  applicantSchema.aggregate([
    {
      $match : {
      '_id': new ObjectID(req.params.id)}}, // casting string to objectID
      // and matching the id from applicant collection
    {
      $lookup: { // joining from course 
      from:'course',
      localField: '_id',
      foreignField: 'applicant',
      as: 'course'
    }}
  ])
  //console.log(res.data)
  .then(data => res.json(data))
  .catch(err => res.status(400).json({error: 'Unable to aggregate'}))
});
// export the router
module.exports = router
