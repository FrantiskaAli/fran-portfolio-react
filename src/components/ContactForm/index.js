import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function ContactForm()   {
  
  //code frome emailJS
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_u95gnk2', 'template_48hu9ot', form.current, 'lbUYNipY2HNNeh2B5')
    .then((result) => {
        alert('Thanks,I will be in touch soon!');

    }, (error) => {
        console.log(error.text);
    });
    /*code from emailJS */
};  return (
  <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" required/>
    <label>Email</label>
    <input type="email" name="user_email"required />
    <label>Message</label>
    
    <textarea name="message" required/>
    <section>
    <button type="submit" value="Send">Send me an Email! </button>
   <Link to="contact" role="button" className="btn">
  <i className="fa-solid fa-eye-slash fa-2x"></i>
      </Link>
     
      </section>
      </form> 
      );
}



export default ContactForm;