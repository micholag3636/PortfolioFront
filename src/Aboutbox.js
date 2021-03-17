import React from 'react'
import "./Aboutbox.css"
import PersonIcon from '@material-ui/icons/Person';

function Aboutbox(props) {
    return (
        <div className="contentbox">
         
            {props.icon}
            {props.title}

            {props.about}


            
        </div>
    )
}

export default Aboutbox
