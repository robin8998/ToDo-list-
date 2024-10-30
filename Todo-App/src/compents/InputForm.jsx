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
    <div className='mt-4'>
      <input type="text" 
      placeholder='Write todo'
      value={todo}
      onChange={(e)=> setTodo(e.target.value)}
      className='bg-gray-800 mx-5 w-[40%] h-10 p-4 rounded-lg text-white'
      />

      <button type='submit'
      className='bg-green-600 p-1 w-20 h-8 rounded-xl hover:bg-green-800 transition-colors duration-300 delay-200'
      >Add</button>
    </div>
    </form>
  )
}

export default InputForm