import React from 'react'
import "./Nav.css"
import {Route, BrowserRouter as Router, Link, NavLink} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';

function Nav({click}) {
    return (
        <div>
           
        

<div id="menu">






                  <div>
                      <ul>
                       <Link className="link" to="/">      <li>HOME</li>  </Link> 
                   <Link className="link" to="/projects">     <li>PROJECTS</li>  </Link> 
                        <Link  className="link" to="/about">   <li>ABOUT</li> </Link>  
                        <Link className="link" to="/contact">       <li>CONTACT</li> </Link>  
                         


                        </ul>


                    </div>
                    
<div>
             <div id="ham2" className="hamburger_menu" onClick={click}>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    </div>
                    </div>
                  

                   



                    
                    
                   
              
               
                



         


       



       
       
            </div>
        </div>
    )
}

export default Nav
