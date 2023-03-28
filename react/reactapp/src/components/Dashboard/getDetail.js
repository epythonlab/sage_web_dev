import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function GetDetail(){

	// set sates to store data from api
	const [courses, setCourses] = useState([])
	// get applicant id from the route
	const {id} = useParams();
	// applicant detail from api
	useEffect(() =>{
		// all courses by applicant id
		axios.get(`http://localhost:4000/applicants/applicantDetail/${id}`)
			.then((res) => {
				// append the data from api to detail
				setCourses(res.data)
				//console.log(res.data)
			})
			.catch(err => {
				console.log('Data not fetched.' + err.message)
			});
	}, [id]);

	//console.log(courses)
	return (
		<div className="table-wrapper">
			<h2>Applicant Detail</h2>
	      	<table className="fl-table">
	      		<thead>
			      	<th> Applicant name </th>
			      	<th rowspan='2'> course name </th>
					<th> course status </th>
				</thead>
				<tbody>
				 	{courses.map((data =>(
				 		<tr key={data._id}> 
				 		<td> {data.first_name +' '+ data.last_name}</td>
				 		{data.course.map((c, i) =>(
				 			<tr key={c._id}>
					 			<td >{++i}</td>
					 			<td style={{width:'100%'}}>{c.course_name}</td>
				 			</tr>
				 			))}
				 		</tr>
				 		)))}
				</tbody>
			</table>
		</div>
	)
}
export default GetDetail