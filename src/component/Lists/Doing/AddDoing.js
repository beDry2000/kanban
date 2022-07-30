import React, { useState, useRef, useEffect } from 'react';

import { setJob, addJob } from '../../context/reducer/actions';
import useMediaQuery from '@mui/material/useMediaQuery';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useData } from '../../hooks';



const AddToDo = () => {
    const [hideInput, setHideInput] = useState(true);
    const [state, dispatch] = useData();
    const { todoInput } = state;
    const handleInput = () => {
        setHideInput(!hideInput);
    }
    const inputRef = useRef();
    const [disable, setDisable] = useState(true);

    // const len = inputRef.current.value.length || 0;
    useEffect(() => {

        setDisable(todoInput.length > 0 ? false : true)
        // console.log('Dang chay useEffect', todoInput.length);
    }, [todoInput])
    const handleAdd = () => {
        if (todoInput.length > 0) {
            dispatch(addJob(todoInput));
            dispatch(setJob(''));
        }
        setHideInput(true);
    }
    // const isSmallScreen = useMediaQuery();
    const isMediumScreen = useMediaQuery('(min-width:1024px)');

    return (
        <div className='mt-4 flex items-end gap-4'>
            <svg
                className='cursor-pointer'
                width="26" height="26" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={handleInput}
            >
                <circle cx="6" cy="6" r="5.5" stroke="#3c53c7" />
                <rect x="5.60001" y="3.2" width="0.8" height="5.6" rx="0.4" fill="#3c53c7" />
                <rect x="3.19998" y="6.39999" width="0.8" height="5.6" rx="0.4" transform="rotate(-90 3.19998 6.39999)" fill="#3c53c7" />
            </svg>

            {hideInput
                ? <div onClick={handleInput}>Create New Item</div>
                : (
                    <>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { width: isMediumScreen? '40ch': '20ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                inputProps={{ ref: inputRef }}
                                autoFocus
                                label="Create New Item"
                                variant="standard"
                                value={todoInput}
                                onChange={e => dispatch(setJob(e.target.value))}
                                color="primary"
                            />
                        </Box>
                        <Button variant='contained' disabled={disable} onClick={e => handleAdd(e)}>ADD</Button>

                    </>
                )
            }
        </div>

    )
}

export default AddToDo;