// CREATE ROUTES FOR DASHBOARD INSIDE App.js

// import route
// CREATE ROUTES FOR DASHBOARD INSIDE App.js
import React from 'react';
// import route
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './components/Dashboard/app.css';
import Navbar from './components/navbar/Navbar'
import ApplicationForm from './components/Dashboard/ApplicationForm'
import ShowApplicants from './components/Dashboard/ShowApplicants'
import EditApplicant from './components/Dashboard/EditApplicant'
import AddCourse from './components/Dashboard/AddCourse'
import GetDetail from './components/Dashboard/getDetail'

/* Add BrowserRouter, then add a Routes component as a child
   in the return method
   inside of Switch, add a Route with a path for each component
   that used to route to the endpoints
*/
/* you can modify the following component */

function App() {
  {/* routes to all pages */}
  return (
    <Router>
      <Navbar />
        <div className='container' >
          <Routes>
            <Route path='/' exact element={<ShowApplicants />} />
            <Route path='/new-applicant' element={<ApplicationForm />} />
            <Route path='/edit-applicant/:id' element={<EditApplicant />} />
            <Route path='/addCourse/:id' element={<AddCourse />} />
            <Route path='/getDetail/:id' element={<GetDetail />} />
          </Routes>
        </div>
    </Router>
  );
}
export default App;