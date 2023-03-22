// components/Dashboard/ApplicationForm

// create student registration form component
import React from 'react';
import './formStyle.css';
/* this is a component to create new records in your MongoDB
  import modules
*/
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
/* Axios is a promised-based HTTP client for Javascript.
  It has the ability to make HTTP requests from the browser
  and handle the transformation of the request and response data
  INSTALL: npm install --save-dev axios

  Axios is a lightweight HTTP client for Node.js and the browser, 
  similar to a Fetch API. Axios is a promise-based async/await library 
  for readable asynchronous code. We can easily integrate it with React, 
  and it is effortless to use in any frontend framework. 
  We’ll call our APIs through Axios.
*/

function ApplicationForm(){

  // define states to set form values
  // Define the state with useState hook
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({})

  // define onChange to get form values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setFormValues(values => ({...values, [name]: value}))
  }
  //define form submit handler

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:4000/applicants/application', formValues)
      .then(res => {
        if(res.status ===200){
          alert('You are successfuly registered')
          // Push to /
          navigate('/')
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      navigate('/')
  }
  
//console.log({formValues})
  // return the form layout
  return (
    <div className='form-wraper'>
      <div className="form-container">
        <div className="title">Application Form</div>
        <form onSubmit={handleSubmit} >
          <div className="user__details">
            <div className="input__box">
              <span className="details">First Name</span>
              <input type="text" name='first_name' placeholder="E.g: Asibeh" 
              value = {formValues.fname} onChange={handleChange} required />
            </div>
            <div className="input__box">
              <span className="details">Last Name</span>
              <input type="text" name='last_name' placeholder="E.g: Tenager" 
              value = {formValues.lname} onChange={handleChange} required />
            </div>

            <div className="input__box">
              <span className="details">Email</span>
              <input type="email" name='email' placeholder="asibeh@gmail.com" 
              value= {formValues.email} onChange={handleChange} required />
            </div>
            <div className="input__box">
              <span className="details">Phone Number</span>
              <input type="tel" name='phone_number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
              value= {formValues.phone} placeholder="092-345-6787" onChange={handleChange} required />
            </div>
          </div>
          <div className="gender__details" onChange={handleChange}>
            <input type="radio" name="gender" id="dot-1" value='Male'/>
            <input type="radio" name="gender" id="dot-2" value='Female'/>
            <span className="gender__title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span>Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span>Female</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value='Apply' />
          </div>
        </form>
      </div>
    </div>
  );
}
export default ApplicationForm;
