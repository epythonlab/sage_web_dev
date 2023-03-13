// CREATE ROUTES FOR DASHBOARD INSIDE App.js
import React from 'react';
// import route
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'; // Login component from components
import {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard' // import Dashboard component
/* Add BrowserRouter, then add a Routes component as a child
   in the return method
   inside of Switch, add a Route with a path for each component
   that used to route to the endpoints
*/
/* you can modify the following component */

function App() {
  // setToken to Login component
  // and return to login if invalid token
  const [token, setToken] = useState();
  if (!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="container">
      <h1> STI Database System </h1>
      <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
