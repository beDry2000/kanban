import { useRef, useState } from 'react';
import Buttons from './Buttons/Buttons';
import { checkJob } from '../../context/reducer/actions';
import { editJob, editId } from '../../context/reducer/actions';
import EditIcon from '@mui/icons-material/Edit';

import { useData } from '../../hooks';

const DoingItem = ({ todo, date, id, isComplete, index, from }) => {
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
    const [isHover, setIsHover] = useState(false);
    const handleMouseOver = () => {
        setIsHover(true);
    }
    const handleMouseOut = () => {
        setIsHover(false);
    }
    return (
        // assign provided.inerRef
        <>

            <div className='doing-item height50' onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                {
                    editedId !== id ?
                        (
                            <>
                                <div className='doing-item-left' >
                                    <input className="inp-cbx" id={id} type="checkbox" style={{ display: "none" }}
                                        checked={isComplete}
                                        onChange={() => {
                                            dispatch(checkJob(id))
                                        }}
                                    />
                                    <label className="cbx"
                                        htmlFor={id}

                                    >
                                        <span>
                                            <svg width="12px" height="9px" >
                                                <polyline points="1 5 4 8 11 1"></polyline>
                                            </svg>
                                        </span>
                                        <span>{todo}</span>

                                    </label>
                                    
                                    {(isHover) &&
                                        <div
                                            onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut}
                                        >
                                            <Buttons
                                                id={id}
                                            />
                                        </div>
                                    }
                                    

                                </div>
                            </>
                        ) :
                        (
                            <div className='doing-item-left edit-field'>
                                <input
                                    type='text'
                                    defaultValue={todo}
                                    ref={editInputRef}
                                    className="edit-input"
                                />

                                <EditIcon onClick={handleEdit} />
                            </div>
                        )

                }
            </div>
                {!!from ? <p style={{color: 'lightgray', paddingLeft: '32px', paddingBottom: '5px'}}>From: <i>{from}</i></p> : false}
        </>
    )
}

export default DoingItem;