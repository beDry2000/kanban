import { reOrderDoing } from '../../context/reducer/actions';
import DoingItem from './DoingItem';



import { useData } from '../../hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const DoingList = ({ provided, columnId, innerRef }) => {


  const [state, dispatch] = useData();
  const { todos, curUser } = state;
  // const doingArr = ;



  return (
    <>
      <div className="task-list"
        ref={innerRef}
        {...provided.droppableProps}
      >
        {
          todos.filter(({ isCompleted, isRemoved, assignedFrom }) => {
            if ( assignedFrom === curUser) {
              return false;
            }
            return !isCompleted && !isRemoved;
          } )
            .map(({ todo, date, id, isCompleted, assignedFrom }, index) => (
              <Draggable draggableId={id.toString()} index={index} key={id.toString()}>
                {(provided) => (
                  <div
                    className='doing-task boxshadow '
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                
                  >
                    <DoingItem todo={todo} id={id} isComplete={isCompleted}
                      index={index}
                      from={!!assignedFrom ? assignedFrom : ''}
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