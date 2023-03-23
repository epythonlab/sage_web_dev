// CREATE ROUTES FOR DASHBOARD INSIDE App.js

// import route
// CREATE ROUTES FOR DASHBOARD INSIDE App.js
import React from 'react';
// import route
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'; // Login component from components
import Dashboard from './components/Dashboard/Dashboard' // import Dashboard component
import UseToken from './components/useToken';
import Navbar from './components/navbar/Navbar'
import ApplicationForm from './components/Dashboard/ApplicationForm'
import ShowApplicants from './components/Dashboard/ShowApplicants'
import EditApplicant from './components/Dashboard/EditApplicant'

/* Add BrowserRouter, then add a Routes component as a child
   in the return method
   inside of Switch, add a Route with a path for each component
   that used to route to the endpoints
*/
/* you can modify the following component */

function App() {

  return (
    <>
    <Navbar />
    <div className="container">
       <Routes>
          <Route path="/" element={<ApplicationForm />}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/application" element={<ApplicationForm />}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/list-applicants" element={<ShowApplicants />}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/edit-applicant/:id" element={<EditApplicant />}>
          </Route>
        </Routes>
    </div>
  </>
  );
}

export default App;