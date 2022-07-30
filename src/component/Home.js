import React from 'react'
import Header from './Header/Header'
import { useSideContext } from './hooks'
import Lists from './Lists/Lists'

const Home = () => {
  const {isLoggedin} = useSideContext();

  return (
    <div>
      <Header />
      {
        isLoggedin 
        ? <Lists /> 
        : (
          <p className='my-10 text-center'>The Sloan Digital Sky Survey has created the most detailed</p>
        )
      }
      
    </div>
  )
}

export default Home