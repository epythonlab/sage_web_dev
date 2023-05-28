// {/* this is age calculator app by picking date of birth

//  using datepicker package
//  1. install datepicker library
//  	>npm install react-datepicker --save
//  2. disable other component functions 

//  3. import modules
// */}
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './bmi.css';

// create component
function AgeCalculator(){

	// define states
	const [dob, setDob] = useState(new Date());
	// conver the values of datepicker into standard dateformat
	let db = new Date(dob.getFullYear(), dob.getMonth(), dob.getDate());
	// calculating month difference from current date in time
	let month_diff = new Date() - db.getTime();
	// convert the calculated difference in date format
	let age_dt = new Date(month_diff);
	// extract year from date
	let year = age_dt.getUTCFullYear();
	// now calculate age using Math abs()
	let age = Math.abs(year - 1970)

	// return elements
	return (
		
		<div className="app">
			<div className="bmi-container"> 
				<h2 className="txtCenter"> Age Calculator </h2>
				<DatePicker
					dateFormat = 'yyyy/MM/dd'
					selected={dob}
					onChange={(date) => setDob(date)}
					placeholderText='Pick date of birth'
					/>
				<div className="txtCenter">
					<p> You are {age} years old.</p>
				</div>
			</div>
		</div>
	);
}
export default AgeCalculator;