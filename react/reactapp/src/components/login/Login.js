/* Warning: read each comments below */
/* in this tutorial we're going to implement simple login system */
/* Steps to follow */
/*  1. CREATE the following directory structure in src
      - src/components/login
    2. CREATE TWO files in the above directory
      - Login.js - a module contains Login component
      - Login.css - css module contains all css attributes to
        design the login layout
    3. DEFINE Login component below
    4. ONCE you finished the above steps, GO TO index.js
     and include Login.js to test the login form


    NOW let's create Login functional component as below
*/

import React from 'react';
import './Login.css';
// import PropTypes as of used to check the type of prop
// basically used to catch bugs
// install using npm install --save-dev prop-types
import PropTypes from 'prop-types';
import {useState} from 'react';

/* NEXT:
      create async function to make a POST request to the server
  TIP: In a large application, it is strongly recommended that
      you would add these to a separate directory

  the function will take credentials as an argumentm, then it will call
  the fetch method using the POST option
*/
async function loginUser(credentials){
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())

}

// pass setToken as a prop in the Login component
function Login({setToken}){
  // define username and password constant variables
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // then go down to the input form and setUsername and setPassword
  // to onChange event handler

  /*
      create a form submit form handler called handleSubmit that will
      call loginUser with the username and password
      then, call setToken with a successful result
      call handleSubmit using the onSubmit event handler on the <form>
  */
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token)
  }
  // Design Login form with html elements below
  // with css
  /* CSS classes ARE DEFINED IN Login.css
  you can also use your own css layout
  add onChange = {(e) =>setUsername(e.target.value)}
*/
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="User name / Email"
              onChange = { (e) => setUsername(e.target.value)}/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password"
              onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>

  );
}
// assign the propTypes property
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default Login;
