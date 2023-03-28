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
 	 in this case, let's consider an applicant having an address
 	 - ech applicant has an address of
 	  - home address
 	  - email address
 	  - work address
 	  - applicant_id
*/

// define address schema referencing applicant

const mongoose = require('mongoose');
/*
  A schema is a JSON object that defines the structure
  and contents of your data
*/
const Schema = mongoose.Schema;

let addressSchema = new Schema({
  home_address: {
    type: String
  },
  email_address: {
    type: String
  },
  work_address: {
    type: String
  },
  // referencing applicant
  applicant_id: [{
  	type: Schema.Types.ObjectId,
  	ref: 'Applicant'
  }],
  date_updated: {
    type: Date, default: Date.now
  }
  },
  {
    // create collocation
    collection: 'address'
})
// export the schema
module.exports = mongoose.model('Address', addressSchema)
// CREATE routes
// - create address.routes.js
