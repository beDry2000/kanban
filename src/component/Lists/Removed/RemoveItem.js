import React from 'react';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import Tooltip from '@mui/material/Tooltip';

import { removeJob } from '../../context/reducer/actions';
import { useData } from '../../hooks';

const RemoveItem = ({ todo }) => {
  const [,dispatch] = useData();

  return (
    <div>
      <label className='line-through' htmlFor={todo.todo}>{todo.todo}</label>
      <Tooltip title="Restore">
        <RestoreFromTrashOutlinedIcon
          style={{ fontSize: "40px" }}
          onClick={() => dispatch(removeJob(todo.id))}
        />
      </Tooltip>
    </div>
  )
}

export default RemoveItem