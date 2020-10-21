import React, {useState} from 'react'
import './Timer.css'

function Timer() {

    const [day,setdays] = useState(0);
    const [hour,sethours] = useState(0);
    const [minute,setminutes] = useState(0);
    const [second,setseconds] = useState(0);

    var deadline = new Date("dec 31, 2100 15:37:25").getTime(); 
  
    var x = setInterval(function() { 
    
        var now = new Date().getTime(); 
        var remainingTime = deadline - now; 
        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((remainingTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); 
        
        setdays(days); 
        sethours(hours); 
        setminutes(minutes);  
        setseconds(seconds);

        if (remainingTime < 0) { 
                clearInterval(x);         
                setdays(0); 
                sethours(0); 
                setminutes(0);  
                setseconds(0);
            }
    }, 1000); 
    return (
        <div className="Timer_Container">
            <span className="Timer_Hour">{hour}</span>
            <span className="Timer_Seperator">:</span>
            <span className="Timer_Minute">{minute}</span>
            <span className="Timer_Seperator">:</span>
            <span className="Timer_Second">{second}</span>
            <span className="Timer_ExpiredText">Left</span>
        </div>
    )
}

export default Timer
