import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { useData } from '../../hooks'
import RemoveItem from './RemoveItem'



const Removed = ({ id }) => {
  const [state] = useData();
  const { todos, filInput, filterListId } = state;
  const isSearching = filInput.length > 0;
  const isFilterCurList = filterListId === id || filterListId;

  return (
    <div
      className="task-list"
      // style={{opacity: isSearching ? isFilterCurList? '1': '0.1' : '1'}}
    >
      <div className='top-list' >
      <h2>Removed</h2>
      <hr />
      </div>
      <div className='task-content'>
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
                  .filter(({todo}) => {
                    if (isSearching && isFilterCurList) {
                      return todo.toLowerCase().includes(filInput.toLowerCase());
                    }
                    return true;
                  })
                  .map((todo, index) => (
                    <RemoveItem key={index} todo={todo} />
                  ))
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      </div>
    </div>
  )
}

export default Removed