import { React, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';


function ContactForm()   {
  const navigate = useNavigate();
  //code frome emailJS
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_u95gnk2', 'template_48hu9ot', form.current, 'lbUYNipY2HNNeh2B5')
    .then((result) => {
        alert('Thanks,I will be in touch soon!');
navigate('contact')
    }, (error) => {
        console.log(error.text);
    });
    /*code from emailJS */
};  return (
  <form ref={form} onSubmit={sendEmail}>
    <h1>Get in touch with me <i className="fa-regular fa-address-card"></i></h1>
    <label>Name</label>
    <input type="text" name="user_name"  id="name" required/>
    <label>Email</label>
    <input type="email" name="user_email" id="email" required />
    <label>Message</label>
    
    <textarea name="message" id="message" required/>
    <section>
    <button type="submit" value="Send" id="form-button"> Send me an Email! </button>
   <Link to="contact" role="button" className="btn">
  <i className="fa-solid fa-eye-slash fa-2x"></i>
      </Link>
     
      </section>
      </form> 
      );
}



export default ContactForm;