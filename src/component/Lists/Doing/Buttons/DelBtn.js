import { useData } from '../../../hooks';
import { useState } from 'react';
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
                    style={{ color: 'red' }}
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
                    <div className='button-logout-div'>
                        <Button
                            className='button-logout'
                            // sx={{ mb: -2, mt: 2, ml: '10rem', mr: '2rem', width: 1 / 4 }}
                            sx={{ mr: '20px', ml: '20px', mt: '20px', mb: '5px' }}
                            variant="outlined" onClick={handleDel}
                        >Yes</Button>
                        <Button
                            className='button-logout'
                            sx={{ mr: '20px', ml: '20px', mt: '20px', mb: '5px' }}
                            // sx={{ mb: -2, mt: 2, width: 1 / 4 }}
                            variant="contained" onClick={handleClose}>
                            No
                        </Button>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}

export default DelBtn;