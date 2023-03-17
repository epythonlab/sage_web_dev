  /*
    LASTLY; storing a user token with
      - sessionStorage and localStorage
  There are several options for storing tokens, but every
  storage option has costs and benefits
  - storing in Javascript memory
  - storing in sessionStorage
  - storing in localStorage and
  - storing in cookie
  Any how the primary trade-off ins security.
  Any information that is stored outside of the memory of the current
  application is vulnerabe to XSS attacks

   creating a custom Token Hook
  - this is a function that wraps custom logic
  a custom hook usually wraps one or more built-in react
  hooks a long with custom implementations
  - the main advantage is that you can remove the implementation logic from
  the component and you can reuse it across multiple components

     TODO:
     - remove the call to useState and create two new functions called
     - setToken and getToken
 */
 import { useState } from 'react';

 function UseToken(){

   const getToken = () =>{
     const tokenString = sessionStorage.getItem('token');
     const userToken = JSON.parse(tokenString);
     return userToken?.token
   };
   const [token, setToken] = useState(getToken());

   // save token
   const saveToken = userToken =>{
     sessionStorage.setItem('token', JSON.stringify(userToken));
     setToken(userToken.token);
   };

   // teturn an object that contains the token and saveToken set to
   // the setToken property name

   return {
     setToken: saveToken,
     token
   }

 }
 export default UseToken;
