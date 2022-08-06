import React, { useReducer } from 'react';
import {createContext} from 'react';
import reducer from './reducer/reducer';


export const DataContext = createContext();

//todos la data chua cac task can lam 
// const data = getData();
// const TodoOfKien = data[0].todos;

const DataProvider = ({ children }) => {
    const initState = {
        todos: [],
        todoInput:'',
        editedId: null,
        curUser: null,
        filInput:'',
        filterListId: 'column-1',
    }
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
