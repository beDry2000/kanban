import React from 'react';
import '../Doing/DoingItem.css'

const DoneItem = ({todo}) => {
    return (
        <div>
            <input className="inp-cbx" id={todo} type="checkbox" style={{ display: "none" }} checked />
            <label className="cbx" htmlFor={todo}><span>
                <svg width="12px" height="9px" >
                    <polyline points="1 5 4 8 11 1"></polyline>
                </svg></span><span>{todo}</span></label>
        </div>
    )
}

export default DoneItem