import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';
/* edit applicant data with id */

function EditApplicant(){

  // define states
  const [applicant, setApplicant] = useState([])
  const {id} = useParams();
  /* useParams is one of the several react hooks in ract router
    it used to retreive route paramaters from the component
    rendered by the matching route
  */
   // add title 
  useEffect(() =>{
    document.title ='Aplicants List';
  })

  // API: get a single applicant data by ID
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:4000/applicants/update-applicant/${id}`)
          .then((res) =>{
            setApplicant(res.data);
          })
          .catch((err) =>{
            console.log("Error:" + err.message)
          });
  }, [id]);

  //console.log(applicant)

  /* handle onChange and onSubmit to update the specified applicant data */
  // Define the state with useState hook
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({})

  // define onChange to get form values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setFormValues(values => ({...values, [name]: value}))
  }
  //define form submit handler

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:4000/applicants/update-applicant/${id}`, formValues)
      .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
          navigate('/list-applicants')
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      navigate('/list-applicants')
  }
  

	return (
    <div className='form-wraper'>
  		<div className="form-container">
        <div className="title">Application Form</div>
          <form onSubmit={handleSubmit} >
            <div className="user__details">
              <div className="input__box">
                <span className="details">First Name</span>
                <input type="text" name='first_name' placeholder="E.g: Asibeh" 
                  defaultValue = {applicant.first_name} onChange={handleChange} required />
              </div>
              <div className="input__box">
                <span className="details">Last Name</span>
                <input type="text" name='last_name' placeholder="E.g: Tenager" 
                  defaultValue={applicant.last_name} onChange={handleChange} required />
              </div>

              <div className="input__box">
                <span className="details">Email</span>
                <input type="email" name='email' placeholder="asibeh@gmail.com" 
                  defaultValue= {applicant.email} onChange={handleChange} required />
              </div>
              <div className="input__box">
                <span className="details">Phone Number</span>
                <input type="tel" name='phone_number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                  defaultValue= {applicant.phone_number} placeholder="092-345-6787" 
                  onChange={handleChange} required />
              </div>
            </div>
            <div className="gender__details" onChange={handleChange}>
              <input type="radio" name="gender" id="dot-1" value='Male'/>
              <input type="radio" name="gender" id="dot-2" value='Female'/>
              <span className="gender__title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span>Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span>Female</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value='Update' />
            </div>
          </form>
        </div>
      </div>
		)
}
export default EditApplicant;