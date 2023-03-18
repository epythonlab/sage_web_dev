
// create student registration form component
import React from 'react';
import './formStyle.css';


function ApplicationForm(){

  // return the form layout
  return (
    <div class="form-container">
      <div class="title">Application Form</div>
        <form >
          <div class="user__details">
            <div class="input__box">
              <span class="details">First Name</span>
              <input type="text" name='fname' placeholder="E.g: Asibeh" required />
            </div>
            <div class="input__box">
              <span class="details">Last Name</span>
              <input type="text" name='lname' placeholder="E.g: Tenager" required />
            </div>

            <div class="input__box">
              <span class="details">Email</span>
              <input type="email" name='email' placeholder="asibeh@gmail.com" required />
            </div>
            <div class="input__box">
              <span class="details">Phone Number</span>
              <input type="tel" name='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="092-345-6787" required />
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
            <input type="submit" value="Apply" />
          </div>
        </form>
    </div>
  );
}
export default ApplicationForm;
