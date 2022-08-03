import { reOrderDoing } from '../../context/reducer/actions';
import DoingItem from './DoingItem';

import './DoingItem.css';


import { useData } from '../../hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const DoingList = ({ provided, columnId, innerRef }) => {


  const [state, dispatch] = useData();
  const { todos } = state;


  const doingArr = todos.filter(({ isCompleted, isRemoved }) => !isCompleted && !isRemoved)

  // const doingArr = ;



  return (
    <>
      <div className="task-list"
        ref={innerRef}
        {...provided.droppableProps}
      >
        {
          doingArr
            .map(({ todo, date, id, isCompleted }, index) => (
              <Draggable draggableId={id.toString()} index={index} key={id.toString()}>
                {(provided) => (
                  <div
                    className='border border-sky-500'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <DoingItem todo={todo} id={id} isComplete={isCompleted}
                      index={index}
                    />
                  </div >
                )}
              </Draggable>
            ))
        }
        {provided.placeholder}
      </div>
    </>

  )
}

export default DoingList