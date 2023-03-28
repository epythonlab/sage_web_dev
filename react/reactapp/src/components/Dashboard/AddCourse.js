/*
    Course registration with appplicant id
    API method: post
    use: axios 
*/
import {useRef, useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';

/* applicant register for new course by id */
function AddCourse(){

  // Define the states with useState hook
  const [formValues, setFormValues] = useState({})
  // set user id or applicant id as params to use it later
  const {id} = useParams();

  /* 
    useParams is one of the several react hooks in react router
    it used to retreive route paramaters from the component
    rendered by the matching route
  */
   // set document title 
  useEffect(() =>{
    document.title ='Register course';
  })

  /* handle onChange and onSubmit to update the specified applicant data */
  
  const navigate = useNavigate();
  
  // define onChange to get form values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // pass applicant_id as the second key in the setFormsValues
    setFormValues(values => ({...values, [name]: value, ['applicant']:id}))
  }

  //define form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      `http://localhost:4000/applicants/registerCourse`, formValues)
      .then(res => {
        if(res.status ===200){
          alert('Applicant successfuly registered for the course')

          // Push to /
          navigate('/')
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      navigate('/')
  }
  // render the layout
	return (
    <div className='form-wraper'>
  		<div className="form-container">
        <div className="title">Register for course </div>
        <form onSubmit={handleSubmit} >
          <div className="user__details">
            {/*
              Setting the user id in the input field is not neccessary
              because the user id is already saved in the useParams react dom hooks
              therefor, you can use it anywhere in this program without need to 
              set in the input field as default value. 
            <div className="input__box">
            <span className="details"></span>
              <input type="text" name="applicant" ref= {ref} value={id} onChange={(e) =>setId({id})} />
            </div>*/}
          </div>
            {/* 
              select option allow applicant to select course name from
              drop down menu 
              note that you have to fetch the option values from another MongoDB
               collection which contains list of course names as a document

              *his is for testing purpose
          */}
          <div className="gender__details">
            <div className="input__box">
              <span className="details">Course Name: </span>
              <select name='course_name' onChange={handleChange}>
                <option value="null">-- Select course --</option>
                <option value="web">Web Development</option>
                <option value="graphic">Graphic Design</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>
          </div>
          <div className="button">
            <input className="primary new" type="submit" value='Register' />
          </div>
        </form>
      </div>
    </div>
	);
}
export default AddCourse;