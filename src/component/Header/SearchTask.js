import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { useData } from '../hooks';
import { filJob, filList } from '../context/reducer/actions';
const SearchTask = () => {
    const [state, dispatch] = useData();
    const { filInput, filterListId } = state;
    const handleFilter = (e) => {
        dispatch(filList(e.target.value));
    }
    const handleChange = (e) => {
        dispatch(filJob(e.target.value));
    }
    return (
        <>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        value={filInput}
                        onChange={handleChange}
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    // onBlur={() =>  dispatch(filJob(''))}
                    />
                </Box>
            </div>
            <div style={{marginRight: '1rem'}}>

                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    List
                </InputLabel>
                <NativeSelect
                    defaultValue={filterListId}
                    inputProps={{
                        name: 'Criteria',
                        id: 'uncontrolled-native',
                    }}
                    onChange={handleFilter}
                >
                    <option value={'column-1'}>Doing</option>
                    <option value={'column-2'}>Done</option>
                    <option value={'column-3'}>Removed</option>
                    <option value={true}>All Lists</option>
                </NativeSelect>
            </div>
        </>

    )
}

export default SearchTask