import { useEffect } from 'react';
import Home from './component/Home';
import getData from './component/context/reducer/data';
import { useData } from './component/hooks';
import { fetchJob } from './component/context/reducer/actions';
import { useSideContext } from './component/hooks';
import Login from './component/Login';

import './App.css'

function App() {
  const [state, dispatch] = useData();
  const {openLogin} = useSideContext();

  useEffect(() => {
    if (window.localStorage.getItem('todos') === null) {
      const data = getData();
      window.localStorage.setItem('todos', JSON.stringify(data));
    } 
    console.log(JSON.parse(window.localStorage.getItem('todos')));
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
