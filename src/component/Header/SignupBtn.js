import { useState, useRef } from 'react';
import { useData, useSideContext } from '../hooks';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Stack from '@mui/material/Stack';

const SignupBtn = () => {

    const { isLoggedin } = useSideContext();
    const [error, setError] = useState(false);

    const nameInt = useRef();
    const passInt = useRef();
    const removeError = () => { setError(false); }

    const handleSignup = () => {

        const name = nameInt.current.value;
        const pass = passInt.current.value;
        if (name && pass) {
            // Kiem tra !!localStorage
            // Tam thoi mac dinh co ton tai localStorage 'todos'
            // test if duplicate user name
            const localData = JSON.parse(window.localStorage.getItem('todos'));
            const isDuplicate = localData.findIndex(({ userName }) => userName === name) !== -1;
            if (isDuplicate) {
                setError('userName already exists. Please change your name')
            } else {
                const passRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
                const isOKPass = passRegex.test(pass);
                if (isOKPass) {
                    // set item
                    const newUser = {
                        userName: name,
                        password: pass,
                        todos: []
                    }
                    localData.push(newUser)
                    window.localStorage.setItem('todos', JSON.stringify(localData))
                    handleClose();
                } else {
                    // set Error - adjust data password
                    setError('Mat khau co it nhat 1 chu thuong, 1 chu hoa, 1 so, 1 ki tu dac biet, it nhat 8 ki tu. Vidu: quiet2*Frog')
                }
            }

        } else {
            setError('Invalid input');
        }

    }

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {
                isLoggedin ? true : (
                    <>
                        <Button
                            variant="contained"
                            onClick={handleClickOpen}
                            sx={{
                                mr: 2,
                            }}

                        >Signup</Button>
                        {/* <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Sign up</DialogTitle>
                            <DialogContent>
                                <label htmlFor='name' >Username:</label>
                                <input id='name' ref={nameInt} onFocus={removeError} required />
                                <label htmlFor='pass' >Password:</label>
                                <input id='pass' ref={passInt} type='password' onFocus={removeError} required />
                                <p>{error}</p>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleSignup}>Sign up</Button>
                            </DialogActions>
                        </Dialog> */}
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Sign up</DialogTitle>
                            <div className="login-container boxshadow ">
                                <div class="col-3 input-effect">
                                    <input
                                        class="effect-16"
                                        type="text"
                                        placeholder=" "
                                        id='name'
                                        ref={nameInt}
                                        onFocus={removeError} required
                                    />
                                    <label htmlFor="name">User Name</label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="col-3 input-effect">
                                    <input class="effect-16"
                                        type="password"
                                        placeholder=" "
                                        id='pass'
                                        ref={passInt}
                                        onFocus={removeError} required
                                    />
                                    <label htmlFor="pass">Password</label>
                                    <span class="focus-border"></span>
                                </div>
                                <p>{error}</p>
                                <div className='doing-item' style={{ justifyContent: 'center', margin: '20px 0' }}>
                                    <Stack spacing={2} direction="row">

                                        <Button
                                            variant="outlined"
                                            onClick={handleClose}
                                        >Cancel</Button>
                                        <Button
                                            variant="outlined"
                                            onClick={handleSignup}
                                        >Sign up</Button>
                                    </Stack>
                                </div>
                            </div>

                        </Dialog>

                    </>
                )
            }



        </>

    )
}

export default SignupBtn