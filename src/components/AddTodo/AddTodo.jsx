import './AddTodo.css'

import {useState } from "react";
import { useDispatch } from 'react-redux';

function AddTodo(){
    const dispatch=useDispatch();
    const [todoText,setTodoText]= useState('');

    function addTodo(todoText){
        dispatch({type:'add_todo' , payload:{todoText}})
    }
    return(
        <div className='form'>
        <h1 className="heading">TODO LIST</h1>
        <input className="input" placeholder="add your next todo ..." 
          onChange={(e)=>setTodoText(e.target.value)} 
          value={todoText} >

        </input>
        
        <button className='button' onClick={()=>{
            addTodo(todoText);
        setTodoText('');
        }}>Add</button>
        </div>
    )
}

export default AddTodo;