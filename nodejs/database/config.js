// database/config.js
const dbConfig = require('./db') // import the db.js module
const mongoose = require('mongoose');

// connecting MongoDB database
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbConfig.db, {
    // configure the MongoDB database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database successfully connected...');
  } catch (err) {
    console.log('Could not connect to database:' + err.message)
    process.exit(1);
  }
};

module.exports = connectDB;