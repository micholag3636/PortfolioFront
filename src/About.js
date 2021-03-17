import React from 'react'
import "./About.css"
import Aboutbox from "./Aboutbox.js"
import Aboutbox2 from "./Aboutbox2.js"
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';

function About() {
    return (
        <div className="boxabout">


<div className="box-area">
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

           
         


            </div>

       
            <div >
                < img className="pimg"src="https://cdn2.f-cdn.com/ppic/167323316/logo/34077223/7vUTh/profile_logo_.JPG"  />
                <h1 className="about-name">
                    Michael Ola
                </h1>
                <img className="stars" src="https://i-spy.ie/wp-content/uploads/2015/09/5-stars.png"  />
              <div className="link-free">  <p className="stars-p"></p> Rated 5 Stars On <a  className="link-star" href="https://www.freelancer.com/u/michael9756"  target="_blank" >Freelancer.com </a></div>

            </div>


         


            <div className="abouts-box">
            <Aboutbox  title={<h2>About Me</h2>}    about={<p>Hi my name is Michael and I am a Full Stack Web Developer / Social Media Marketer from Ireland with over 3 years of experience in marketing and 2 years experience in web development.
</p>}  icon={ <PersonIcon  className="icon"/> }/>
                <Aboutbox2/>
                <Aboutbox  icon={ <WorkIcon  className="icon"/>} title={<h2>What I Do</h2>} about={<p>I have a passion for building responsive, engaging websites and using my marketing knowledge to get that website into the hands of users.</p>}/>


            </div>


            
        </div>
    )
}

export default About
