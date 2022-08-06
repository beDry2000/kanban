import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { useData } from '../../hooks';
import DoneItem from './DoneItem';

const Done = ({ id }) => {
  const [state] = useData();
  const { todos, filInput, filterListId } = state;
  const isSearching = filInput.length > 0;
  const isFilterCurList = filterListId === id || filterListId;
  console.log('Done', isFilterCurList)
  return (
    <div
      className="task-list"

    >
      <div className='top-list'
      >
        <h2>Done</h2>
        <hr />
      </div>

      <div className='task-content'>
        <Droppable droppableId={id}>
          {
            (provided, snapshot) => (
              !!id && (
                <div
                  className='boxshadow'
                  style={{
                    backgroundColor: snapshot.isDraggingOver ? 'lightblue' : '',
                    // paddingTop: '10px'
                  }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >

                  {
                    todos
                      .filter(({ isCompleted }) => isCompleted)
                      .filter(({ todo }) => {
                        if (isSearching && isFilterCurList) {
                          console.log('DAng chay Filter')
                          console.log('isSearching', isSearching)
                          return todo.toLowerCase().includes(filInput.toLowerCase());
                        }
                        return true;
                      })
                      .map(({ todo }, index) => (
                        <DoneItem key={index} todo={todo} />
                      ))
                  }
                  {provided.placeholder}
                </div>
              )

            )
          }
        </Droppable>
      </div>

    </div>
  )
}

export default Done