import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { useData } from '../../hooks'
import RemoveItem from './RemoveItem'



const Removed = ({ id }) => {
  const [state] = useData();
  const { todos } = state;

  return (
    <div
      className="task-list"
    >
      <div className='top-list' >
      <h2>Removed</h2>
      <hr />
      </div>
      <div className='task-content' >
      <Droppable droppableId={id}>
        {
          (provided, snapshot) => (
            <div
              className="task-list"
              style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : '' }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {
                todos
                  .filter(({ isRemoved }) => isRemoved)
                  .map((todo, index) => (
                    <RemoveItem key={index} todo={todo} />
                  ))
              }

            </div>
          )
        }
      </Droppable>
      </div>
    </div>
  )
}

export default Removed