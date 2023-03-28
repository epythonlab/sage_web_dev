/*
  /* Relationships:
 1. Embedded relation ship(Denormalization) - 
  - one-to-few document relationship
  - data is simply denormalized by embedding child(related)
   documents right into the parent(main) document
 2. Referenced data model(normalization):
  - when data is normalized - documents are separated into
   different collections, and they share references between each other
   - it is recommended
   - it can be done using child referencing
   - a document is considered child referenced
   when the parent document stores a reference to its child collections,
   storing its identifiers
   - in most cases, the id, in an array of similar identifiers on the parent document
   in this case, let's consider an applicant register for many courses
   and many courses might be registered by many applicants
   - many - to - many relationship
*/
const mongoose = require('mongoose');
/*
  A schema is a JSON object that defines the structure
  and contents of your data
*/
const Schema = mongoose.Schema;

let courseSchema = new Schema({
 
  course_name: {
    type: String,
    required: true
  },
  applicant:{
    type: Schema.Types.ObjectId,
    ref: 'Applicant' // referencing applicant id
  },
  date_updated: {
    type: Date, default: Date.now
  }
  },
  {
    // create collocation
    collection: 'course'
})
// export the schema
module.exports = mongoose.model('Course', courseSchema)
// CREATE routes
// - create course.routes.js
