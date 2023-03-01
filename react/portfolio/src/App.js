 /*
    Import all modules and components
    in the header
    Looking for components directory
    all components are created and located inside
 */
import React from 'react';
import './index.css';
import About from './components/About';

/* functional components
  which returns all main contents
*/
function App() {
  return (
    /* add the following css classes to change the background
    of the portfolio to dark with gray text
    */
    <main className='text-gray-400 bg-gray-900 body-font'>
          <About />
    </main>
    
  );
}

export default App;
