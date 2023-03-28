// Show applicants list 
// import modules
import React from 'react';
import './table.css';
import './app.css'
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'


function ShowApplicants(){

  // define state variable to store data from api
  const [applicants, setApplicants] = useState([]);
  const [getMessage, setMessage] = useState('') // success message after deleted
  const [isSuccess, setSuccess] = useState(false); // manage success of deleting item
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
    // if (window.confirm('Are you sure to detele all data?', )){
      axios.delete(`http://localhost:4000/applicants/delete-applicant/${id}`)
          .then((res) => {
            navigate('/') // navigate to list applicates
            setMessage('Applicant successfuly deleted!') // set success message
            setSuccess(true) // set is success to true
          })
          .catch((err) =>{
            console.log('Error to delete data.'+err.message)
          });
  };

  // onChange handler about selecting multiple items from the table
  // apply deleting the items
  const [checked, setChecked] = useState([]); // save the selected items to checked
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      // three dots - rest parameters or spread operators and expands
      // an array into list
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList); // checked items are saved as an array of object
  };
  //console.log(checked)

  /* DELETE ALL API:
          the API will request to delete all checked items
          from the database
  */
  const deleteChecked =() =>{
    // confirm the action before deleting the item 
    // to make sure that you're gonna delete the selected items
    if (window.confirm('Are sure to delete all selected data?', )){
      // deleting multiple items with delete api call is not possible
      // this is an alternative solution to delete multiple records
      // but it is really not an efficient way 
    for(let id of checked){
      // call api along with id to delete selected data by id
       axios.delete(`http://localhost:4000/applicants/delete-applicant/${id}`)
            .then((res) => {
              setMessage('Successfuly Deleted!'); // set flash message
              setSuccess(true); // set success to true
            })
            .catch((err) =>{
              console.log('Error to delete data.'+err.message)
          });
      } // end of window alert
    } 
    navigate('/') // navigate to list applicates 
  }
  
  // return the layout
  return (

    <div className="table-wrapper">
      <h2>List of Applicants</h2>
       {/* display flash message if isSuccess is true */}
       {isSuccess?<div class="success-msg"><i class="fa fa-check"></i>
                  {getMessage}</div>: ''}

      {/* button add new applicant and delete all selected items */}
      <Link className='button condensed delete' onClick={deleteChecked}>
        Delete selected record(s) </Link>
       <Link className='button condensed new' to="/new-applicant">Add new</Link>

      {/* table to display list of applicants from api */}
      <table className="fl-table">
        <thead>
          <tr>
            <th> Check </th>
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
           {/* checkbox button to select multiple items to delete */}
             <td> <input type="checkbox" value={data._id} onChange={handleCheck}/> </td>
             <td>{++i}</td>
             <td>{data.first_name}</td>
             <td>{data.last_name}</td>
             <td>{data.gender}</td>
             <td>{data.phone_number}</td>
             <td>{data.email}</td>
             <td>{data.date_updated}</td>
             <td>
             {/* Action buttons */}

              <Link className="edit-link" to={`/edit-applicant/${data._id}`}>
                <i className="fa-solid fa-pen-to-square"></i></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <Link onClick = {() => { window.confirm('Are you sure you wish to delete this data?', )
                                     && onClickDelete(data._id)}}>
                <i className="fa-sharp fa-solid fa-trash" style={{color:'#f41032'}}></i>
              </Link>
               &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={`addCourse/${data._id}`}>
                <i className="fa-solid fa-plus" style={{color: '#1f5122'}}></i>
                <span className='tooltiptext'> Register new course</span>
              </Link>

              <Link to={`getDetail/${data._id}`}>
                <i className="fa-solid fa-plus" style={{color: '#1f5122'}}></i>
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
