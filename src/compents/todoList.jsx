import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoList({todo}) {
    const {updateTodo,deleteTodo,toggleComplete} = useTodo()
    const [todoText,setTodoText] = useState(todo.todo)
    const [editable , setEditable] = useState(false)
    
    const update = () =>{
    updateTodo(todo.id , {...todo , todo : todoText})
    setEditable(!editable)
    }

    const toggle = () =>{
      toggleComplete(todo.id) 
    }
  return (
    <div className={`flex justify-between  p-2 rounded-xl items-center ${todo.completed ? "bg-green-600" : "bg-yellow-600"} transition-colors duration-500 delay-200`}>
      {/* inputs fields  */}
      <div>
        <input type="checkbox"
        checked={todo.completed}
        onChange={toggle}
        className=' outline-none mx-4'
         />

        <input type="text" 
         readOnly={!editable}
         onChange={(e)=> setTodoText(e.target.value)}
         value={todoText}
         className={`${todo.completed ? "line-through" : ""} outline-none  ${editable ? "bg-white" : "bg-inherit"} rounded-lg`}
         />
        </div>
         
         {/* buttons --------- */}
        <div>
        <button
        onClick={()=> {
          if(todo.completed) return 

          if(editable){
            update()
          }
          else{ setEditable((prev)=> !prev)}
        }}
        disabled={todo.completed}
        className={` p-1 w-20 h-8 rounded-xl hover:bg-green-800 mx-2 transition-colors duration-300 delay-200  ${todo.completed ? "bg-green-800" : "bg-green-600" }`}
        >{editable ? "Save" : "Edit"}</button>


        <button
        onClick={()=> deleteTodo(todo.id)}
        className='bg-red-700 p-1 w-20 h-8 rounded-xl hover:bg-red-800 mx-2 transition-colors duration-300 delay-200'
        >Delete</button>
        </div>
    </div>
  )
}

export default TodoList