import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import InputForm from './compents/InputForm'
import TodoList from './compents/TodoList'

function App() {
  const [todos,setTodos] = useState([])
 
  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))

   if(todos && todos.length !== 0 ){
    setTodos(todos)
   }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  // functionality from here ----

  const addTodo = (todo) =>{
    setTodos((prev)=> [{id: Date.now(),...todo}, ...prev])
  }

  const updateTodo =(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=> (
      prevTodo.id === id ? todo : prevTodo
    )))
  }

  const deleteTodo = (id) =>{
  setTodos((prev)=> prev.filter((todo)=> (
    todo.id !== id
  )))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=>(
      prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo
    )))
  }

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className='w-full h-screen '>
       <div className='w-full'>
        <h1 className='bg-black text-white text-2xl font-bold rounded-xl py-3 '>Add Your Todos List</h1>
        <div className='my-3'>
          <InputForm/>
        </div>

        <div>
          {todos.map((todo)=> (
            <div key={todo.id}
            className='my-3'
            >
              <TodoList todo={todo} />
            </div>
          ))}
        </div>
       </div>
      </div>
    </TodoProvider>
  )
}

export default App
