/* The first step is that import required modules and components in the header
of your file
 - Basically react is allow you to easily create faster user interfaces for
  websites and applicaitons.
  the main concept of react is virtual DOM - it is a tree based on JS
  components created with react that mimics a DOM tree
  --------------------
  In this project we will use react hooks with functional components and
  arrow function
  ----------------------------------------------------------------------
  A hook is a special function that lets you 'hook into' react features,
  for example useState is a hook that lets you add react useState to function
  component
  What is a function component?
  -----------------------------
    a react functional component is a simple JS functon that accepts props
    and returns a react element
    - after the introduction of react hooks writing functional components
    has become the standard way of writinG react components in modern
    applications
    what is props?
     - arguments passed into react components via html attributes

 TIP:
    The bigest advantage of functional component is that
    they have your code easily and also make your
    program easy to read anD understand for others

    - We use react hooks in the functional component
 - beacause react hooks is the re-usability of stateful logic
  - react hooks provides: reusability, redablity, and testability
*/
// import all required modules in the header
import React, {useState} from 'react';

// define our own functional component
function BmiCalculator(){

  /* Define react hook states
      what is state?
      ---------------
      - the state is a built-in react object that is used to contain
      data or information about the component
      - a component's state can change over time; whenever it changes
      the componenT re-renders

  */
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  /* these state names are variables that can be named anything
    you would like
    - the first value, weight and height are our current state
    the second, setHeight and setWeight are the function that are
    use to update our state
    - set initial state to 0

    */
  //Day 2: LET'S ADD MORE STATES
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState(" ");

  /* let's define arrow funCtion with parameter that
    used to calculate the bmi

    with arrow function the this keyword alwas represenTs the object
    that definEd the arrow function
    - arrow function is a new features of ES6, introduced in
      ReactJs 16.
    - It allows you to create a function that has lexical this

  */
  let calcBmi = (event) =>{

    event.preventDefault();
    /* method cancels the event if it is cancelable, which
      means that the default action that belongs to the event will
      not occur
      eg. clicking on a "submit" button, prevent it from submitting a information
          clicking on a link, prevent the link from following the public url
    */

    /* Logic to calculate the bmi */
    // validate the form value
    if (weight == 0 || height == 0){
      alert("Please enter valid weight and height.");
    }
    else{
      let bmi = (weight / (height/100)**2);
      // set bmi to the state variable defined in the useState above
      setBmi(bmi.toFixed(1))
      /* toFixed()
        - converts a number to a string
        - rounds the string to a specified number of decimals
      */

      // legic to print bmi status
      if (bmi < 18){
        setMessage('underweight')
      }
      else if(bmi < 25 && bmi >= 18.5){
        setMessage('healthy')
      }
      else if(bmi < 30 && bmi >= 25){
        setMessage('overweight')
      }
      else{
        setMessage('obese')
      }
    } // end of else statement
  } // end of arrow function

  /* the return method is a way to return data from a component
    it returns the data that was passed into the component
    it is used when you want to return a sinGle value from a component
  */
  return (
    <div className='app'>

      <div className='container'>
        <h2 className="txtCenter">BMI Calculator </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(kg)</label>
            <input type='number' min='1' value={weight} onChange={(event) =>
            setWeight(event.target.value)}/>
          </div>

          <div>
            <label>Height(kg)</label>
            <input type='number' min='10' value={height} onChange={(event) =>
            setHeight(event.target.value)}/>
          </div>
          <div>
            <button type='submit' className='btn'>Calculate </button>
          </div>
        </form>
        <div>
          <h3 className='txtCenter'>Your BMI is : {bmi}</h3>
          <p>You are {message}</p>
        </div>
      </div>
    </div>
  );
} // end of our component
/*
  export default is used to export a single class,
  function or primitve from a script file
*/
export default BmiCalculator; // don't forget to export your componeNt
