import { useData } from '../../../hooks';
import {useState} from 'react';
import { delJob } from '../../../context/reducer/actions';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  borderRadius: '10px',
  boxShadow: 50,
  p: 4,
};


const DelBtn = ({ id }) => {

  const [, dispatch] = useData();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDel = () => {
      dispatch(delJob(id));
      setOpen(false);
  }

  return (
      <div>

          <Tooltip title="Delete">
              <IconButton
                  aria-label="delete"
                  size="lg"
                  onClick={handleOpen}
              >
                  <DeleteIcon />
              </IconButton>
          </Tooltip>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                  <Typography id="modal-modal-title" variant="button" component="h2">
                      Do you want to delete this tasks?
                  </Typography>
                  <Button
                      sx={{ mb: -2, mt:2, ml: '10rem', mr:'2rem' , width: 1 / 4 }}
                      variant="outlined" onClick={handleDel}>Yes</Button>
                  <Button
                      sx={{ mb: -2, mt:2, width: 1 / 4 }}
                      variant="contained" onClick={handleClose}>No</Button>
              </Box>
          </Modal>
      </div>
  );
}

export default DelBtn;