import { useState } from 'react';
import Button from '@mui/material/Button';
import { useSideContext } from '../hooks';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  pb: 2
};

const LoginBtn = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isLoggedin, handleOpenLogin, handleLogout } = useSideContext();
  const handleClick = () => {
    if (isLoggedin) {
      // dung modal warning cua mui de confirm 
      handleOpen();
    } else {
      handleOpenLogin();
    }
  }
  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          mr: 2,
        }}
      >
        {
          isLoggedin ? 'Log out' : 'Log in'
        }
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="button" component="h2" sx={{textAlign:'center', fontSize:'20px', fontWeight:'600'}}>
            Do you want to log out?
          </Typography>
          <div className='button-logout-div'>
            <Button
              // sx={{ mb: -2, mt: 2, ml: '10rem', mr: '2rem', width: 1 / 4 }}
              sx={{mr: '20px', ml: '20px', mt: '20px', mb: '5px'}}
              className='button-logout'
              variant="outlined"
              onClick={() => {
                handleClose();
                handleLogout();
              }}
            >
              Yes
            </Button>
            <Button
             className='button-logout'
             sx={{mr: '20px', ml: '20px', mt: '20px', mb: '5px'}}
              // sx={{ mb: -2, mt: 2, width: 1 / 4 }}
              variant="contained" onClick={handleClose}>No</Button>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default LoginBtn