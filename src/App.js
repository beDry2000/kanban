import { useEffect, useLayoutEffect } from 'react';
import Home from './component/Home';
import getData from './component/context/reducer/data';
import { useData } from './component/hooks';
import { fetchJob, setCurUser } from './component/context/reducer/actions';
import { useSideContext } from './component/hooks';
import Login from './component/Login';

import './App.css'

function App() {
  const [state, dispatch] = useData();
  const {openLogin, handleLogIn} = useSideContext();

  useLayoutEffect(() => {
    if (window.localStorage.getItem('todos') === null) {
      const data = getData();
      window.localStorage.setItem('todos', JSON.stringify(data));
    } 
    console.log(JSON.parse(window.localStorage.getItem('todos')));
    if (window.sessionStorage.getItem('userLogin') !== null) {
      const userLogin = window.sessionStorage.getItem('userLogin');
      const localData = JSON.parse(window.localStorage.getItem('todos'));
      const userTodos = localData.find(({ userName }) => {
        return userName === userLogin 
      });
      console.log(userTodos);
      dispatch(fetchJob(userTodos.todos));
      dispatch(setCurUser(userLogin));
      handleLogIn();
    }
  },[])


  return (
    <>
      {
        openLogin ? <Login /> : <Home />
      }
    </>
  );
}

export default App;
