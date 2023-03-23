// Show applicants list 
// import modules
import React from 'react';
import './table.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'


function ShowApplicants(){

  // define state variable to store data from api
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate()

  // add title 
  useEffect(() =>{
    document.title ='Aplicants List';
  })

  // API: get data from mongoDB database
  useEffect(() =>{
    axios.get('http://localhost:4000/applicants/list-applicants')
    .then((res) =>{
      setApplicants(res.data); // set api data to useState as an array

    })
    .catch(err => { // catch error message
      console.log('Data not found.' +err.message)
    });
  }, []);

  //console.log(applicants)
  /* 
    DELETE API: 
      onclickdelete a single data from database
      the api call with a selected id to delete

  */
  const onClickDelete =(id) =>{
    axios.delete(`http://localhost:4000/applicants/delete-applicant/${id}`)
        .then((res) => {
          navigate('/') // navigate to list applicates
        })
        .catch((err) =>{
          console.log('Error to delete data.'+err.message)

        });
  };

  // return the layout
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
            <th>Last Updated</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
         {/*display list of applicant data in a table
          first map each array data in key-value pair and
          iterate over each row and display in a table row

          add a unique key to the returned component of each tr as prop
          */}
          {applicants.map((data, i) =>(
           <tr key={data._id}>
             <td>{++i}</td>
             <td>{data.first_name}</td>
             <td>{data.last_name}</td>
             <td>{data.gender}</td>
             <td>{data.phone_number}</td>
             <td>{data.email}</td>
             <td>{data.date_updated}</td>
             <td>
              <Link className="edit-link" to={`/edit-applicant/${data._id}`}>
                <i className="fa-solid fa-pen-to-square"></i></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <Link onClick = {() => { window.confirm('Are you sure you wish to delete this data?', )
                                     && onClickDelete(data._id)}}>
                <i className="fa-sharp fa-solid fa-trash" style={{color:'#f41032'}}></i>
              </Link>
             </td>
           </tr>
         ))}
        </tbody>
      </table>
    </div>
  )
}
export default ShowApplicants;
