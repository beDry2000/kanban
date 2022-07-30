import { useRef } from 'react';
import Buttons from './Buttons/Buttons';
import { checkJob } from '../../context/reducer/actions';
import { editJob, editId } from '../../context/reducer/actions';

import './DoingItem.css';
import { useData } from '../../hooks';

const DoingItem = ({ todo, date, id, isCompleted }) => {


    const editInputRef = useRef();
    const [state, dispatch] = useData();
    const { editedId } = state
    const handleEdit = () => {
        dispatch(editJob({
            id,
            input: editInputRef.current.value
        }));
        dispatch(editId(''));
    }

    return (
        // assign provided.inerRef
        <>
            <div>
                {
                    editedId !== id ?
                        (
                            <>
                                <input className="inp-cbx" id={id} type="checkbox" style={{ display: "none" }}
                                    checked={isCompleted}
                                    onChange={() => {
                                        dispatch(checkJob(id))
                                        console.log('Dang chay Edit')
                                    }} />
                                <label className="cbx" htmlFor={id}>
                                    <span>
                                        <svg width="12px" height="9px" >
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>{todo}</span></label>
                            </>
                        ) :
                        (
                            <div>
                                <input type='text' defaultValue={todo} ref={editInputRef} />
                                <button onClick={handleEdit}>Edit</button>
                            </div>
                        )

                }
            </div>

            <Buttons id={id} />
        </>
    )
}

export default DoingItem;