import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Fab from '@mui/material/Fab';
import { useData } from '../hooks';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height: '50vh',
    p: 1
};
export default function AssignTable(prop) {

    const [state,] = useData();
    const { todos, curUser } = state;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={handleOpen}>
                <Fab color="primary" aria-label="add">
                    <FormatListBulletedIcon sx={{ fontSize: '2rem' }} />
                </Fab>
            </Box>
            {/* <Button  sx={{
                width: 50, height: 50, borderRadius: '50%',
                backgroundColor: 'black'
            }}><FormatListBulletedIcon sx={{ fontSize: '2rem' }} /></Button> */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ width: '50vw' }}>
                        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <caption>Job Assignment List</caption>
                                <TableHead >
                                    <TableRow>
                                        <TableCell style={{ width: '50%' }}>Task</TableCell>
                                        <TableCell align="right">Completion Date</TableCell>
                                        <TableCell align="right">Person-in-charge</TableCell>

                                    </TableRow>
                                </TableHead>

                                <TableBody >
                                    {
                                        todos.filter(({assignedFrom}) => assignedFrom === curUser)
                                            .map(({ todo, date, assignedTo, isCompleted }) => (
                                            <TableRow className={isCompleted && 'success-bg'} >
                                                <TableCell component="th" scope="row">
                                                   {todo}
                                                </TableCell>
                                                <TableCell align="center">{date}</TableCell>
                                                <TableCell align="center">{assignedTo}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Box>
            </Modal>
        </>
    );
}




