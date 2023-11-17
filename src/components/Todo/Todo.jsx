function Todo({text,isFinished}){
    return(

        <div>
        <input type="checkbox" checked={isFinished}></input>
        <span>{text}</span>
        <button>Edit</button>
        <button>Delete</button>
        </div>

    )

}

export default Todo;