import Doing from './Doing/Doing';
import Done from './Done/Done';
import Removed from './Removed/Removed';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Lists.css';
import { useData } from '../hooks';
import { checkJob, delJob, reOrderDoing } from '../context/reducer/actions';

const Lists = () => {
  const [state, dispatch] = useData();
  const { curUser } = state;
  // const columns = currentUserData.columns;

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination, type, draggableId } = result;
    if (!destination) { return; };
    const start = source.droppableId;
    const end = destination.droppableId;
    if (start === end && source.index === destination.index) { return; };
    // reOrder inside a list 
    if (start !== end) {
      dispatch(end === 'column-2'? checkJob(+draggableId) : delJob(+draggableId));
      return;
    }
    const userData = JSON.parse(window.localStorage.getItem('todos'));
    const currentUserData = userData.find(({ userName }) => userName === curUser);
    console.log('Current user Data: ', currentUserData);
    const newTodos = currentUserData.todos.filter(({ isCompleted, isRemoved }) => !isCompleted && !isRemoved);
    const a = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, ...a);
    dispatch(reOrderDoing(newTodos))
    // reOrder columns

  }
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="allLists flex gap-5 justify-evenly mt-5">
          <div className="list">
            <Doing id='column-1' />
          </div>
          <div className="list">
            <Done id='column-2' />
          </div>
          <div className="list">
            <Removed id='column-3' />
          </div>
        </div>
      </DragDropContext>
    </>
  )
}

export default Lists