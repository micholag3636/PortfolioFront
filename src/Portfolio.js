import React from 'react'
import "./Portfolio.css"
import Productscreen from "./Productscreen.js"

function Portfolio() {
    return (
        <div className="back">
            
        

           

<div className="title-box">
                 <h1 className="main-titles">My Projects</h1>
                 </div>
        <div className="all-services">
        <div className="box-area">
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

           
         


            </div>

       
    
            
     
            <Productscreen title="Cloud Hosting Service" text="Developed this for a cloud consulting company" img="https://cdn3.f-cdn.com/files/download/138272319/Screenshot%20%28118%29.png"/>
            <Productscreen title="Playstation Store" text="Developed this for a Ps5 concept project" img="https://cdn3.f-cdn.com/files/download/138272356/Screenshot%20%28119%29.png"/>
            <Productscreen title="Facebook Clone" text="This Facebook Clone has signup and login capabilities " img="https://cdn2.f-cdn.com/files/download/137034054/Screenshot%20%28112%29.png"/>
            <Productscreen title="Online Store" text="Online Store developed using the MERN Stack" img="https://cdn5.f-cdn.com/files/download/138272563/Screenshot%20%28117%29.png"/>
            <Productscreen title="Amazon Clone" text="Built using the MERN Stack, Flexbox and Redux " img="https://cdn3.f-cdn.com/files/download/138361809/Screenshot%20%28110%29%20%282%29.png"/>

      
        </div>

      

                 

        </div>



    )
}

export default Portfolio
