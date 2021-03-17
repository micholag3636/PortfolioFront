import React from 'react'
import "./Contact.css"
import emailjs from "emailjs-com"

function Contact() {



    function sendEmail(e) {
        e.preventDefault();
      
        emailjs.sendForm('service_iyre2ye', 'template_28yfgne', e.target, 'user_8evbgoOIH93mTSVY3NeG4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      
      }
    return (

        <div className="contacts-box">

<div className="box-area">
        <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

           
         


            </div>










            <h1 className="contactme">Contact me</h1>
            <div className="rounded-box">
        
         <form className="contact-form" onSubmit={sendEmail}>
  
      <div id="top-form" ></div>
      <input placeholder="Name" type="text" name="name" />
  
      <input placeholder="Email" type="email" name="email"/>
      <textarea  placeholder="Message" name="message" />
      <input id="button-send" type="submit" value="Send" />
    </form>
    </div>
    </div>
       
    )
}

export default Contact
