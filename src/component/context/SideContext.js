import { createContext, useState } from "react"

export const SideContext = createContext();


const SideContextProvider = ({children}) => {

    const [openLogin, setOpenLogin] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [alert, setAlert] = useState(false);
    const [sharedUser, setSharedUser] = useState(false);

    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    const handleOpenAlert = () => setAlert(true);
    const handleCloseAlert = (e, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setAlert(false);
      setSharedUser('');
      console.log(('Tu dong dong cung se xoa thang Shared User'));
    }
    const handleShareUser = (user) => {
      setSharedUser(user);
    }

    const handleLogIn = () => setIsLoggedin(true);
    const handleLogout = () => {
      setIsLoggedin(false);
      window.sessionStorage.removeItem('userLogin');
    };
    // Set Logout sau 

    const value = {
        openLogin,
        isLoggedin,
        handleOpenLogin,
        handleCloseLogin,
        handleLogIn,
        handleLogout,
        alert,
        handleOpenAlert,
        handleCloseAlert,
        sharedUser,
        handleShareUser,
    }
  return (
    <SideContext.Provider value={value}>
        {children}
    </SideContext.Provider>
  )
}

export default SideContextProvider