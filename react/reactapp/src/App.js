// CREATE ROUTES FOR DASHBOARD INSIDE App.js
import React from 'react';
// import route
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'; // Login component from components
import Dashboard from './components/Dashboard/Dashboard' // import Dashboard component
import UseToken from './components/useToken';
import ApplicationForm from './components/Dashboard/ApplicationForm'
/* Add BrowserRouter, then add a Routes component as a child
   in the return method
   inside of Switch, add a Route with a path for each component
   that used to route to the endpoints
*/
/* you can modify the following component */

function App() {
  // setToken to Login component
  // and return to login if invalid token
  // use custom hook to iterate ove the object
  const {token, setToken} = UseToken();
  if (!token){
    return <Login setToken={setToken} />
  }

  return (
    <div className="container">

      <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
        </Route>
        <Route path="application" element={<ApplicationForm />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
