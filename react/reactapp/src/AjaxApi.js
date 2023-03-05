/* Ajax API call with react hooks */
import './bmi.css';
import {useState, useEffect} from 'react';
function AjaxApi(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Note: the empty deps array [] means

  useEffect(()=>{
    document.title ='AjaxApi Call';
  })
  // this useEffect will run once
  useEffect(() => {
    /* The Fetch API through the fetch() method
      allows us to make an HTTP request to the backend.*/
    fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then(res => res.json())
      .then(
        (result)=> {
          setIsLoaded(true);
          setItems(result)
        },
        /* Note: it is important to handle error here
         instead of a catch() block so that we don't swallow
         exceptions from actual bugs in components.
        */
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[])
  if (error) {
    return <div className="container"> Error: {error.message} </div>;
  }else if(!isLoaded){
    return <div>Loading...</div>;
  }else{
    return (
      <div className="app">
        <ul className='container'>
          {items.map(item => (
            <li key={item.id} className='txtCenter'>
              Name:{item.name}, City: {item.city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default AjaxApi;
