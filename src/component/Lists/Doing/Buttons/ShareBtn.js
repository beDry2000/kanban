import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShareIcon from '@mui/icons-material/Share';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import { useSideContext } from '../../../hooks';
import AlertBox from './AlertBox';


import { useState } from 'react';
import { getLocalTodos, getUserObject, useData, setLocal } from '../../../hooks';
import { assignJob } from '../../../context/reducer/actions';


const ShareBtn = ({ shareId }) => {

  const [show, setShow]= useState(false);


  const { handleOpenAlert, handleShareUser } = useSideContext();
  const [state, dispatch] = useData();
  // current User
  const { curUser } = state;

  const data = JSON.parse(window.localStorage.getItem('todos'));
  const userArr = data.map(user => user.userName);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = useState('');

  // Share function
  const handleShare = (receiver) => {
    // receiver will receive
    const { todos: curTodos } = state;
    const localTodos = getLocalTodos();
    const { todos } = getUserObject(localTodos,receiver);
    const isDuplicate = todos.find(({ id }) => id === shareId);
    // If duplicate, show Warning
    if (isDuplicate) { 
      setShow(true);
      return;
     }

    //  Get shared todo obj
    const sharedTask = curTodos.find(({ id }) => id === shareId)
    dispatch(assignJob({
      taskObj: sharedTask,
      curUser,
      receiver
    }))
    // const assignedTask = {
    //   ...sharedTask,
    //   assignedFrom: curUser,
    //   assignedTo: receiver
    // }

    // todos.push({
    //   ...sharedTask,
    //   assignedFrom: curUser,
    //   assignedTo: user
    // });
    // setLocal(localTodos);


    handleClose();
    // set the recipient name
    handleShareUser(receiver);
    // Show Notification of successful share
    handleOpenAlert();
  }

  return (
    <>
      <Tooltip title="Share">
        <IconButton onClick={handleOpen}
        >
          <ShareIcon />
        </IconButton >
      </Tooltip>

      <Dialog onClose={handleClose} open={open}>
        <div
          style={{ margin: '30px' }}
        >
          <div class="container-share">
            <div style={{ position: 'relative', width: '275px' }}>
              <label class="custom-field two">
                <input type="url" placeholder="&nbsp;" value={input} onChange={(e) => setInput(e.target.value)} 
                onFocus={() => setShow(false)}
                />
                <span class="placeholder">Search user name</span>
              </label>
              <div className='icon-search'>
                <IconButton onClick={handleOpen} >
                  {
                    input.length > 0 ? <ClearIcon onClick={() => setInput('')} /> : <ManageSearchIcon />
                  }
                </IconButton >
              </div>
            </div>
            <div
              style={{
                height: '175px',
                overflow: 'scroll'
              }}
            >
              {
                userArr.filter(user => {
                  const filter = input;
                  if (!filter) return true;
                  let name = user.toLowerCase();
                  console.log('Dang chay filter')
                  return name.includes(filter.toLowerCase());
                })
                  .map(user => (
                    <>
                      <div className='target-person'>
                        <div className='flex-row'>
                          <PermIdentityIcon />
                          <p>{user}</p>
                        </div>

                        <Tooltip title="Share">
                          <IconButton
                            onClick={() => handleShare(user)}
                            disabled={user === curUser}
                          >
                            <ShareIcon />
                          </IconButton >
                        </Tooltip>
                      </div>
                    </>
                  ))
              }
            </div>
          </div>
          {
            show && <AlertBox />
          }
        </div>
      </Dialog>


    </>
  )
}

export default ShareBtn;


