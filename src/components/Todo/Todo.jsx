import { useState } from "react";

import './Todo.css'
function Todo({finishTodo,editTodo,deleteTodo,text,isFinished}){

    const [isEditing,setIsEditing]=useState(false);
    const [todoText,setTodoText]=useState(text);
    return(

        <div className="next-todo">
        <input className='box' type="checkbox" checked={isFinished} onChange={()=>finishTodo(!isFinished)}></input>
        {isEditing ? <input value={todoText} onChange={(e)=>setTodoText(e.target.value)}/> : <span className="text">{text}</span>}
        <button className="edit" onClick ={()=>
        {setIsEditing(!isEditing);
        editTodo(todoText);
        }}>{isEditing?'Save':'Edit'}</button>
        <button className="delete" onClick={deleteTodo}>Delete</button>
        </div>

    )

}

export default Todo;