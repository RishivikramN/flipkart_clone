import React from 'react'
import './MidStrip.css'
import Timer from './Util/Timer'

function MidStrip({linktext,midstriptitle,timericonsrc,shouldTimerVisible}) {
    return (
        <div className="midstrip_container">
            <div className="midstrip_item_container">
                <span className="midstrip_title">{midstriptitle}</span>
                <img className="timer_icon" alt="" src={timericonsrc}/>
                <div className="midstrip_timer">
                   {shouldTimerVisible==="True" ? <Timer/> : null}
                </div>
                <div className="midstrip_btn_container">    
                    <button className="midstrip_viewall_btn">{linktext}</button>
                </div>
            </div>
        </div>
    )
}

export default MidStrip
