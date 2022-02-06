import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';


export default function Counter() {
    const [count,setCount]=useState(0)

    //  incr{
        useEffect(() => {
            const interval = setInterval(() => {
              setCount((prevCounter) => prevCounter + 1);
            }, 1000);
        
            return () => clearInterval(interval);
          }, []);
      
       
        
       
    //}
   
   
    const decr=()=>{
        setCount(count-1);
       
    }
    const reset=()=>{
        setCount(0)
    }
  return <div>
      <h1>{count}</h1>
      <button  >+</button>
      <button onClick={decr} >-</button>
      <button onClick={reset}>reset</button>

  </div>
}
