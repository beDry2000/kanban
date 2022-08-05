import React from 'react';
import DoingList from './DoingList';
import AddDoing from './AddDoing';
import { Droppable } from 'react-beautiful-dnd';


const Doing = ({ id }) => {
  return (
    <>
      <div 
      className='task-list'
      >
        <div className='top-list' >
          <h2>Doing</h2>
          <hr />
        </div>
        <div className='task-content-doing'>
          <Droppable droppableId={id}>
            {
              (provided) => (
                <DoingList
                  columnId={id}
                  provided={provided}
                  innerRef={provided.innerRef}
                />
              )
            }
          </Droppable>
        </div>
      </div>
        <AddDoing />
    </>

  )
}

export default Doing