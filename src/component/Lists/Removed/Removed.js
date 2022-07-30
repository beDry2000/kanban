import React from 'react'
import { useData } from '../../hooks'
import RemoveItem from './RemoveItem'



const Removed = () => {
  const [state] = useData();
  const {todos} = state;
  
  return (
    <>
      <h2>Removed</h2>
      {
        todos
          .filter(({ isRemoved }) => isRemoved)
          .map((todo, index) => (
            <RemoveItem key={index} todo={todo} />
          ))
      }

    </>
  )
}

export default Removed