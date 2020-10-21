import React from 'react'
import {useHistory} from 'react-router-dom'
import './Button.css'

/*
    Button Component has a built in CSS and helps to navigate through 
    pages using React-Router Library. 

    Props Usage:
    children : Provide the Text to be visible on the button.
    route : Provide the path of the page to be routed to.
*/

function Button({children,route}) {
    const {push} = useHistory();
    return (
            <button className='btn' onClick={()=> push(route)}> {children}</button>
    )
}

export default Button
