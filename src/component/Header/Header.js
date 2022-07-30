import React from 'react';
import Calendar from './Calendar';
import LoginBtn from './LoginBtn'
import './Calendar.css';
import SignupBtn from './SignupBtn';


const Header = () => {
  return (
    <div className='flex justify-between'>
      <Calendar />
      <SignupBtn />
      <LoginBtn />
    </div>
  )
}

export default Header