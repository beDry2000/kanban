import { useRef, useState } from "react";

import { useData, useSideContext } from "./hooks"
import { fetchJob, setCurUser } from "./context/reducer/actions";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { DragDropContext } from 'react-beautiful-dnd';

const Login = () => {
  const userNameInt = useRef();
  const [error, setError] = useState(false);
  const passInt = useRef();
  const [, dispatch] = useData();
  const { handleCloseLogin, handleLogIn } = useSideContext();


  const handleClick = () => {
    const nameInt = userNameInt.current.value.trim();
    const passInput = passInt.current.value;
    if (nameInt && passInput) {
      const localData = JSON.parse(window.localStorage.getItem('todos'));
      const userTodos = localData.find(({ userName, password }) => {
        return userName === nameInt && password === passInput;
      });

      if (!!userTodos) {
        dispatch(fetchJob(userTodos.todos));
        
        dispatch(setCurUser(nameInt))
        handleLogIn();
        handleCloseLogin();
      } else {
        setError(true);
      }
    } else {
      console.log('Dien cai gi do di!');
    }
  }

  return (
    <div className='my-20 mx-20'>
      <div>
        <label htmlFor="username"> Username: </label>
        <input
          id="username"
          ref={userNameInt}
          type='text'
          onFocus={() => error ? setError(false) : ''}
        />
      </div>
      <div>
        <label htmlFor="password"> Password: </label>
        <input
          id="password"
          ref={passInt}
          type="password"
          onFocus={() => error ? setError(false) : ''}
        />
      </div>
      {
        error && (<p><strong>Khong dung ten dang nhap/mat khau</strong></p>)
      }
      <button onClick={handleClick}>Login</button>
      <button onClick={handleCloseLogin}>Dont want to Log in</button>
      {/* 
      Truyen onFocus qua InputProps duoc
      
      <TextField
          error={error}
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          InputProps={
            {
              onFocus: (() => error? setError(false) : '')
            }
          }
         
        /> */}
    </div>
  )
}

export default Login