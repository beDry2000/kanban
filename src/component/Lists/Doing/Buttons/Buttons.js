import React from 'react'
import EditBtn from './EditBtn';
import DelBtn from './DelBtn';
import ShareBtn from './ShareBtn';

const Buttons = ({id}) => {
  return (
    <div>
      <EditBtn id={id}/>
      <DelBtn id={id}/>
      <DelBtn id={id}/>
      {/* <ShareBtn /> */}
    </div>
  )
}

export default Buttons;