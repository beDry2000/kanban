import React from 'react'
import Header from './Header/Header'
import { useSideContext } from './hooks'
import Lists from './Lists/Lists'
import FirstPage from './FirstPage'
const Home = () => {
  const {isLoggedin} = useSideContext();
  

  return (
    <div className='max-w-screen min-w-screen max-h-screen min-h-screen'>
      <Header />
      {
        isLoggedin
        ? <Lists /> 
        : (
          <FirstPage />
        )
      }
      
    </div>
  )
}

export default Home