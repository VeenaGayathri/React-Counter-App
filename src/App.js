import {useState, useEffect} from 'react';
import './App.css';

const App= () =>{

  const [ counter, setCounter ] = useState(0); 
  /**starting with use, hook state[statename,setter fn setStatename] usestate(ini value)*/
  
  /*
  useEffect(()=>{
    setCounter(100);
     cant say counter=value directly, state can only be modified using its setter function
    },[]); */
  /**dependency list - useeffect fn value executes every time elements of 
   * dependency list are changed, if null, code only happens at start*/
 
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
        <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
      {/**starting with use, hook state[statename,setter fn setStatename] 
       * usestate(ini value),to change initial state, we are using event listener and changing state
       * set counter function will receive the previous state as the first argument, 
       * and the props at the time the update is applied as the second argument */}
    </div>
  );
}

export default App;
