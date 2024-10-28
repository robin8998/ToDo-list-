import {useContext,createContext} from 'react'

export const TodoContext = createContext({
 Todos:[
    {
    id : 1 ,
    todo : "Todo msg" ,
    completd : false
 }
],
addTodo : (todo) =>{},
updateTodo : (todo , id ) =>{},
deleteTodo : (id) => {},
toggleComplete : (id) => {},
})

export const useTodo = ()=>{
   return useContext(TodoContext)
}

export const todoProvider = TodoContext.Provider