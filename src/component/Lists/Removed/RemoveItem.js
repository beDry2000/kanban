import React from 'react';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { removeJob } from '../../context/reducer/actions';
import { useData } from '../../hooks';

const RemoveItem = ({ todo }) => {
  const [,dispatch] = useData();

  return (
    <div className='removed-item boxshadow'>
      <label className='line-through' htmlFor={todo.todo}>{todo.todo}</label>
      <Tooltip title="Restore">
      <IconButton
                    aria-label="edit"
                    size="lg"
                    style={{color: 'black'}}
                    
                  onClick={() => dispatch(removeJob(todo.id))}
                >
        <RestoreFromTrashOutlinedIcon
          style={{ fontSize: "30px" }}
        />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default RemoveItem