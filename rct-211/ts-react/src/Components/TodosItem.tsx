import React from 'react'
import { ITodosItems } from './Todos'
const TodosItem = ({title,status,id}:ITodosItems) => {
  return (
    <div>
      <span>{title}</span>
      <span>{`${id}-${status}`}</span>
    </div>
  )
}

export default TodosItem