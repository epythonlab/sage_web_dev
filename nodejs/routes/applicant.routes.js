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

// create applicant

router.post('/application', (req, res) => {
  applicantSchema.create(req.body)
    .then(data => res.json({ msg: 'Data added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this data' }));
});
// export the router
module.exports = router
