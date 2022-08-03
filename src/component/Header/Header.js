import React from 'react';
import Calendar from './Calendar';
import LoginBtn from './LoginBtn'
import './Calendar.css';
import SignupBtn from './SignupBtn';
import './Header.css'


const Header = () => {
  return (
    <div className='header flex w-screen min-w-[200px]'>
      <div className='basis-1/4 ml-[10%] self-center'>
      <Calendar />
      </div>
      <div className='flex grow justify-end items-center'>
        <SignupBtn />
        <LoginBtn />
      </div>
    </div>
  )
}

export default Header