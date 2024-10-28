import React, { useState } from 'react'
import { useTodo } from '../contexts'

function todoList() {
    const [updateTodo,deleteTodo,toggleComplete] = useTodo()
    const [todoText,setTodoText] = useState()
    
    const update = (todo,id) =>{
    
    }
  return (
    <div>
        <input type="checkbox" />
        <input type="text" />
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default todoList