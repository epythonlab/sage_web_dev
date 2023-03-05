const fs = require('fs')
// with readFile
fs.readFile('data.txt', 'utf-8', (err, data) =>{
  if (err){
    console.error(err)
    return
  }
  let array = data.split('\n')
  // props are id, first_name, last_name, email, gender
  let mapped = array.map(person =>{
    /* Map is a type of data structure or data collection
       that is used to store the data in the form of key and value pairs 
      */
    let new_person = person.split(',');
    return new Object({
      id: new_person[0],
      first_name: new_person[1],
      last_name: new_person[2],
      email: new_person[3],
      gender: new_person[4]

    })
  });
  console.log(mapped)
});
console.log('Hit!')
