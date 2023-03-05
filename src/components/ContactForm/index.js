import { React, useState } from 'react';
import { Link } from 'react-router-dom';

function ContactForm(){
        const [state, setState] =useState("Submit");

        const handleSubmit = async (e) => {
          e.preventDefault();
          const { name, email, message } = e.target.elements;
          let details = {
            name: name.value,
            email: email.value,
            message: message.value,
          };
          let response = await fetch("http://localhost:3000/server.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
          });
          setState("Submitted");
          let result = await response.json();
          alert(result.status);
        };
        return (
            <>
          <form onSubmit={handleSubmit}>
          
          
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" row='5' required />
              <section className="d-flex justify-content-between">
            <button type="submit" id="form-button">{state}</button>
       
           <Link to="contact" role="button" className="btn">
  <i className="fa-solid fa-eye-slash fa-2x"></i>
      </Link>
      </section>
      </form> 
      </>
      )}



export default ContactForm;