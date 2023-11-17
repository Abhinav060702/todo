import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import TodoContext from './context/TodoContext';

function App() {

  const [todos,setTodos]=useState([
    {id:1,text:'todo 1',isFinished:true},
    {id:2,text:'todo 2',isFinished:false}
  ]);

 
  return (
    <>
    <TodoContext.Provider value={{todos,setTodos}}>
    <AddTodo />
    <TodoList />
    </TodoContext.Provider>
    </>
  );
}

export default App;