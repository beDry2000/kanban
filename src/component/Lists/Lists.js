import Doing from './Doing/Doing';
import Done from './Done/Done';
import Removed from './Removed/Removed';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Lists.css';

const Lists = () => {
  const listArr = [<Doing />, <Done />, <Removed />];
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...listArr];
    const [reorderedItem] = listArr.splice(result.source.index, 1);
    listArr.splice(result.destination.index, 0, reorderedItem);
    
  }
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="allLists">
          {
            (provided) => (
              <div className="allLists flex gap-5 justify-evenly mt-5" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  listArr.map((list, index) => (
                    <Draggable key={index} draggableId={index.toString()} index={index}>
                      {
                        (provided) => (
                          <div className="list" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {list}
                          </div>
                        )
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

export default Lists