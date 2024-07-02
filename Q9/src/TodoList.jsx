import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const[todos] = useState([
        {
            id: 1,
            text: 'Hi',
            completed: false
        },
        {
            id: 2,
            text: 'Uttam',
            completed: false
        }
    ])
    const [newTodo, setNewTodo] = useState('')
    const handelAddTodo =() =>{
      if(newTodo.trim())
    }
    
  return (
    <div>TodoList</div>
  )
}

export default TodoList