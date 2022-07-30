import { reOrderDoing } from '../../context/reducer/actions';
import DoingItem from './DoingItem';

import './DoingItem.css';


import { useData } from '../../hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const DoingList = () => {


  const [state, dispatch] = useData();
  const { todos } = state;

  
  const doingArr = todos.filter(({ isCompleted, isRemoved }) => !isCompleted && !isRemoved)

  // const doingArr = ;

  const handleOnDragEnd = ({ source, destination }) => {
    const newArr = [...doingArr]
    const [reorderedItem] = newArr.splice(source.index, 1);
    newArr.splice(destination.index, 0, reorderedItem);
    
    console.log('Doing moi ', newArr);
    dispatch(reOrderDoing(newArr));
  }


  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {
            (provided) => (
              <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  doingArr
                    .map(({ todo, date, id, isCompleted }, index) => (
                      // Draggable require a string id
                      <Draggable key={id} draggableId={id.toString()} index={index}>
                        {
                          (provided) => {
                            return (
                              <div
                                className='border border-sky-500'
                                todo={todo}
                                date={date}
                                id={id}
                                isCompleted={isCompleted}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                                <DoingItem todo={todo} id={id} isCompleted={isCompleted}/>
                              </div >
                            )
                          }
                        }
                      </Draggable>
                    ))
                }
                {provided.placeholder}
              </div>
            )
          }

        </Droppable>
      </DragDropContext>
    </>

  )
}

export default DoingList