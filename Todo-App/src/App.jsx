import { useEffect, useState } from 'react'
import { todoProvider } from './contexts'
import './App.css'

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
    !todo.id === id
  )))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=>(
      prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo
    )))
  }

  return (
    <todoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className='w-full'>
       <div className='w-full'>
        <h1>Add Your Todos List</h1>
        <div>
          {/* Todo form */}
        </div>

        <div>
          {/* todo item will come here */}
        </div>
       </div>
      </div>
    </todoProvider>
  )
}

export default App
