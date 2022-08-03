import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { useData } from '../../hooks';
import DoneItem from './DoneItem';

const Done = ({ id }) => {
  const [state] = useData();
  const { todos } = state;
  return (
    <div
      className="task-list">
      <div className='top-list' >
        <h2>Done</h2>
        <hr />
      </div>

      <div className='task-content'>
        <Droppable droppableId={id}>
          {
            (provided, snapshot) => (
              <div
                style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : '' }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {provided.placeholder}
                {
                  todos
                    .filter(({ isCompleted }) => isCompleted)
                    .map(({ todo }, index) => (
                      <DoneItem key={index} todo={todo} />
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

export default Done