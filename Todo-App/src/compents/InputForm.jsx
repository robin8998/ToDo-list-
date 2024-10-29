import React, { useState } from 'react'
import { useTodo } from '../contexts'

function InputForm() {
  const {addTodo} = useTodo()
  const [todo,setTodo] = useState('')

  const add = (e) =>{
   e.preventDefault()

   if(!todo) return

   addTodo({id: Date.now() ,todo , completed : false})
   setTodo('')
  }
  return (
    <form action="submit" onSubmit={add}>
    <div>
      <input type="text" 
      placeholder='Write todo'
      value={todo}
      onChange={(e)=> setTodo(e.target.value)}
      />

      <button type='submit'>Add</button>
    </div>
    </form>
  )
}

export default InputForm