import React from 'react'
import Header from './Header/Header'
import { useData, useSideContext } from './hooks'
import Lists from './Lists/Lists'
import FirstPage from './FirstPage';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = () => {
  const { isLoggedin, sharedUser } = useSideContext();

  const { alert, handleCloseAlert } = useSideContext();

  return (
    <div className='max-w-screen min-w-screen max-h-screen min-h-screen'>
      <Header />
      {
        isLoggedin
          ?
          (
            <>
              <Lists />
              {/* <Snackbar open={alert} autoHideDuration={4000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                  Shared succesfully to {sharedUser}
                </Alert>
              </Snackbar> */}
            </>
          )
          : (
            <FirstPage />
          )
      }
    </div>
  )
}

export default Home