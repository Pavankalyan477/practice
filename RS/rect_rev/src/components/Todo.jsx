import {useState} from 'react';
import {v4 as uuid } from 'uuid';

function Todo(){
    const [data,setData] = useState([]);
    const [text,setText]= useState("");
    const handleAdd = ()=>{
        const payload = {
            text,
            status:false,
            id:uuid(),
            clr:"white"
        }
        setData([...data, payload])
        setText("");
    }
    const handleRemove = id => {
      const updateTodo = data.filter(item => item.id !== id);
        setData(updateTodo);
    }

   const HandleChange=(e)=>{
        setText(e.target.value)
    }
    return (
       <>
       Todo: <input type="text" value={text} placeholder="Enter Todos" onChange={HandleChange}/>
       <br></br>
       <button onClick={handleAdd}>Submit</button>
        {data.map((e)=>(
            <div key={e.id} style={{display:"flex"}}>
                <div>{e.text}</div>
                <button onClick={()=>
                        handleRemove(e.id)
                        }>
                    Delete
                </button>
          </div>
        ))
      }  
       </>
           
    )
}

export {Todo}