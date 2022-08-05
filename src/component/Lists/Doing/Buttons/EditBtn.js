import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useData } from '../../../hooks';
import { editId } from '../../../context/reducer/actions';



const EditBtn = ({id}) => {
  const [,dispatch] = useData();
  return (
    <div>
      <Tooltip title="Edit">
                <IconButton
                    aria-label="edit"
                    size="lg"
                    style={{color: 'black'}}
                    onClick={() => dispatch(editId(id))}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
    </div>
  )
}

export default EditBtn;