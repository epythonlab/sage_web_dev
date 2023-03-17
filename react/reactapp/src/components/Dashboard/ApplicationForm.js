// create student registration form component
import './form-style.css';
import React from 'react';
/*
  INSTALL: npm install formik
  - Formik is the world's most popular open source form library for React and React Native
  - then, import the module
*/
import { Formik, Form, Field, ErrorMessage } from 'formik';

/*
INSTALL: npm install yup

  - Yup is a schema builder for runtime value parsing and validation.
  - Define a schema, transform a value to match, assert the shape of an existing value, or both.
  - Yup schema are extremely expressive and allow modeling complex,
   interdependent validations, or value transformation

*/
import * as Yup from 'yup';

function ApplicationForm(){

  // validate the form values before submitting
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required('Enter First Name'),
    lname: Yup.string().required('Enter Last Name'),
    phone: Yup.
    email: Yup.string()
      .email('You have entered an invalid email address')
      .required('Required')

  })

  // return the form layout
  return (
    <div class="form-container">
      <div class="title">Application Form</div>
      <Formik {...props} validationSchema = {validationSchema}>
        <form >
          <div class="user__details">
            <div class="input__box">
              <span class="details">First Name</span>
              <input type="text" name='fname' placeholder="E.g: Asibeh" required />
              <ErrorMessage name='fname' className='d-block invalid-feedback' component='span' />
            </div>
            <div class="input__box">
              <span class="details">Last Name</span>
              <input type="text" name='lname' placeholder="E.g: Tenager" required />
              <ErrorMessage name='lname' className='d-block invalid-feedback' component='span' />
            </div>

            <div class="input__box">
              <span class="details">Email</span>
              <input type="email" name='email' placeholder="asibeh@gmail.com" required />
              <ErrorMessage name='email' className='d-block invalid-feedback' component='span' />
            </div>
            <div class="input__box">
              <span class="details">Phone Number</span>
              <input type="tel" name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="092-345-6787" required />
              <ErrorMessage name='phone' className='d-block invalid-feedback' component='span' />
            </div>
          </div>
          <div class="gender__details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class="gender__title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span>Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span>Female</span>
              </label>
            </div>
          </div>
          <div class="button">
            <button variant='danger' size='lg'
              block='block' type="submit" value="Apply" >
              {props.children}
            </button>
          </div>
        </form>
      </Formik>
    </div>
  );
}
export default ApplicationForm;
