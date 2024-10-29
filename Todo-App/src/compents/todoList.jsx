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
    <div>
        <input type="checkbox"
        checked={todo.completed}
        onChange={toggle}
         />

        <input type="text" 
         readOnly={!editable}
         onChange={(e)=> setTodoText(e.target.value)}
         value={todoText}
         className={`${todo.completed ? "line-through" : ""}`}
         />

        <button
        onClick={()=> {
          if(todo.completed) return 

          if(editable){
            update()
          }
          else{ setEditable((prev)=> !prev)}
        }}

        disabled={todo.completed}
        >{editable ? "Save" : "Edit"}</button>
        <button
        onClick={()=> deleteTodo(todo.id)}
        >Delete</button>
    </div>
  )
}

export default TodoList