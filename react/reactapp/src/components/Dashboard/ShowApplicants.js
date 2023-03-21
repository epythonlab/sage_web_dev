// Show applicants list 
// import modules
import React from 'react';
import './table.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


function ShowApplicants(){

  /

  return (

    <div className="table-wraper">
    <h2>List of Applicants</h2>
      <table className="fl-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Updated Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
         {/*display list of applicant data in a table
          first map each array data in key-value pair and
          iterate over each row and display in a table row

          add a unique key to the returned component of each tr as prop
          */}
          <tbody>

          {/* here will display data in a table row */}
          </tbody>
      </table>
    </div>
  )
}
export default ShowApplicants;
