import React from 'react'
import "./Main.css"
import "./logo.svg"
import Nav from "./Nav.js"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import {useState} from "react"

import Backdrop from "./Backdrop.js"

import Portfolio from "./Portfolio.js"
import About from "./About.js"
import Contact from "./Contact.js"
import SideDrawer from "./SideDrawer.js"


function Main() {
    const [sideToggle, setSideToggle] = useState(false)
 
    return (
        <div>
        <div className="main">

            <div id="box1"></div>

            <div id="box2">
                <div id="text">
                    MICHAEL<br/>OLA

                </div>

            </div>
            <div id="box3">
                <div id="container">
                    <div id="logo">
                        <img src="https://i.postimg.cc/hvgWj4y7/download-1-removebg-preview-1.png" />


                    </div>
                    <Nav click={() => setSideToggle(true)}/>
                        
                      
                        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}  />
          
          
        
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
       
                   


                    


                </div>
                </div>




        </div>
            
        </div>
    )
}

export default Main
