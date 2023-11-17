import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){
    const {dispatch} = useContext(TodoContext)
    const [todoText,setTodoText]= useState('');

    function addTodo(todoText){
        dispatch({type:'add_todo' , payload:{todoText}})
    }
    return(
        <>
        <input placeholder="add your next todo ..." 
          onChange={(e)=>setTodoText(e.target.value)} 
          value={todoText} >

        </input>
        
        <button onClick={()=>{
            addTodo(todoText);
        setTodoText('');
        }}>Add</button>
        </>
    )
}

export default AddTodo;