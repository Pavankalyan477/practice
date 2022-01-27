import { useState } from "react"


const Todo = () =>{
const [text,setText]=useState("");

const [todo,setTodo]=useState([]);

const handleChange =(e) =>{
    setText(e.target.value);
}
const handleAdd = () =>{
    setTodo([...todo,text])
}

    return<>
        <input value={text} type="text"  onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>

        {
            todo.map((e)=>
                <dir>{e}</dir>
            )
        }
    </>
}

export {Todo}