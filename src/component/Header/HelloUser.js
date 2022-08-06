import React from 'react'
import { useData } from '../hooks';
import { Stack } from '@mui/material';

const HelloUser = () => {
    const [state] = useData();
    const {curUser} = state; 
    return (
        <>
            <Stack direction="column" spacing={1}>
                <p>Hello,</p>
                <p className='underline'>{curUser}</p>
            </Stack>
        </>
    )
}

export default HelloUser