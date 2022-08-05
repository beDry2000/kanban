import { useRef, useState } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useData, useSideContext } from "./hooks"
import { fetchJob, setCurUser } from "./context/reducer/actions";


// import TextField from '@mui/material/TextField';

// import { DragDropContext } from 'react-beautiful-dnd';

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
        window.sessionStorage.setItem('userLogin', nameInt);
      } else {
        setError(true);
      }
    } else {
      console.log('Dien cai gi do di!');
    }
  }

  return (
    <div className='my-20 mx-20'>
      <div className="login-container boxshadow ">
        <div class="col-3 input-effect">
          <input
            class="effect-16"
            type="text"
            placeholder=" "
            id="username"
            ref={userNameInt}

            onFocus={() => error ? setError(false) : ''}
          />
          <label>User Name</label>
          <span class="focus-border"></span>
        </div>
        <div class="col-3 input-effect">
          <input class="effect-16"
            type="password"
            placeholder=" "
            id="password"
            ref={passInt}

            onFocus={() => error ? setError(false) : ''} />
          <label>Pass word</label>
          <span class="focus-border"></span>
        </div>
        <hr style={{width: '80%', border: '1px solid lightgray', margin: "20px auto"}} />
        {
          error && (<p><strong>Khong dung ten dang nhap/mat khau</strong></p>)
        }
       
        <div className='doing-item' style={{justifyContent: 'center', margin: '20px 0'}}>
          <Stack spacing={2} direction="row">

            <Button
              variant="outlined"
              onClick={handleClick}
            >Log In</Button>
            <Button
              variant="outlined"
              onClick={handleCloseLogin}
            >Back to home</Button>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Login