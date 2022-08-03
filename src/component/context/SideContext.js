import { createContext, useState } from "react"

export const SideContext = createContext();


const SideContextProvider = ({children}) => {

    const [openLogin, setOpenLogin] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);

    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

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
        handleLogout
    }
  return (
    <SideContext.Provider value={value}>
        {children}
    </SideContext.Provider>
  )
}

export default SideContextProvider