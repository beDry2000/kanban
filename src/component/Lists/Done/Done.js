import React from 'react'
import { useData } from '../../hooks';
import DoneItem from './DoneItem';

const Done = () => {
  const [state] = useData();
  const { todos } = state;
  return (
    <>
      <h2>Done</h2>
      {
        todos
          .filter(({ isCompleted }) => isCompleted)
          .map(({ todo }, index) => (
            <DoneItem key={index} todo={todo} />
          ))
      }

    </>
  )
}

export default Done