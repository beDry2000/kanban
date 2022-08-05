import React from 'react';

const DoneItem = ({todo}) => {
    return (
        <div className='done-item'>
            <input className="inp-cbx" id={todo} type="checkbox" style={{ display: "none" }} checked readOnly/>
            <label className="cbx" htmlFor={todo}><span>
                <svg width="12px" height="9px" >
                    <polyline points="1 5 4 8 11 1"></polyline>
                </svg></span><span>{todo}</span></label>
        </div>
    )
}

export default DoneItem