import React from 'react'
import "./Portfolio.css"
import Productscreen from "./Productscreen.js"

function Portfolio() {
    return (
        <div>
                 

<div className="title-box">
                 <h1 className="main-titles">My Projects</h1>
                 </div>
        <div className="all-services">

            
     
            <Productscreen title="Cloud Hosting Service" text="Developed this for a Cloud Hosting Company using React" img="https://cdn3.f-cdn.com/files/download/138272319/Screenshot%20%28118%29.png"/>
            <Productscreen title="Data Migration" text="We supply amazon web services for our clients" img="https://cdn.technologyadvice.com/wp-content/uploads/2017/05/Fotolia_130308566_Subscription_Monthly_M-700x408.jpg"/>
            <Productscreen title="Infrastructure As A Service" text="We supply amazon web services for our clients" img="https://www.channelnews.com.au/wp-content/uploads/2020/06/what_is_laaS_800x420.jpg"/>
            <Productscreen title="Cloud Security" text="We supply amazon web services for our clients" img="https://miro.medium.com/max/512/1*DQxb51_P6QQRSyTGMrxfBQ.jpeg"/>
            <Productscreen title="VoIP Services" text="We supply amazon web services for our clients" img="https://www.wpbeginner.com/wp-content/uploads/2019/06/voipforbusiness.png"/>
            <Productscreen title="Amazon Web Services" text="We supply amazon web services for our clients" img="https://techfest.org/2020/workshops/img/w6.jpg"/>

      
        </div>

        </div>



    )
}

export default Portfolio
