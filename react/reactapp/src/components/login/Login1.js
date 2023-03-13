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


function Login(){

  // Design Login form with html elements below
  // with css
  /* CSS classes ARE DEFINED IN Login.css
  you can also use your own css layout
*/
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="text" className="login__input" placeholder="User name / Email"/>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Password"/>
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
export default Login;
