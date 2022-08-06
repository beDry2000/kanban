import DoingItem from './DoingItem';
import { useData } from '../../hooks';
import { Draggable } from 'react-beautiful-dnd';



const DoingList = ({ provided, columnId, innerRef }) => {


  const [state,] = useData();
  const { todos, curUser, filInput, filterListId } = state;

  // const doingArr = ;

  const isSearching = filInput.length > 0;
  const isFilterCurList = filterListId === columnId || filterListId ;
  console.log(isFilterCurList)
  console.log(isSearching)

  return (
    <>
      <div className="task-list"
        ref={innerRef}
        {...provided.droppableProps}
        // style={{opacity: isSearching ? isFilterCurList? '1': '0.1' : '1'}}
      >
        {
          todos.filter(({ isCompleted, isRemoved, assignedFrom }) => {
            if (assignedFrom === curUser) {
              return false;
            }
            return !isCompleted && !isRemoved;
          })
            .filter(({todo}) => {
              if (isSearching && isFilterCurList) {
                return todo.toLowerCase().includes(filInput.toLowerCase());
              }
              return true;
            })
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