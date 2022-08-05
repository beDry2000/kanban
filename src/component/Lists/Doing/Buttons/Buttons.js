import React from 'react'
import EditBtn from './EditBtn';
import DelBtn from './DelBtn';
import ShareBtn from './ShareBtn';

const Buttons = ({id}) => {
  return (
    <div className='buttons'>
      <EditBtn id={id}/>
      <DelBtn id={id}/>
      {/* <DelBtn id={id}/> */}
      <ShareBtn shareId={id}/>
    </div>
  )
}

export default Buttons;