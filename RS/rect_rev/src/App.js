//import logo from './logo.svg';
import './App.css';
//import {useState} from "react"
import {Todo} from "./components/Todo"
import Counter from './components/Counter';

function App() {
  // const [count,setCount]=useState(0);
  return (
    <div className="App">
     {/* <h1>counter : {count}</h1>
     <button
     onClick={()=>{
       if(count>=0 && count <10){
        setCount(count+1)
       } else{
        setCount(count-1)
       }
      
     }}>ADD</button> */}
     <Todo/>

     <Counter/>
     
    </div>
  );
}

export default App;
