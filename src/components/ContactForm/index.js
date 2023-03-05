import React from 'react';
import { Link } from 'react-router-dom';

function contactForm(){

    return <>
    
<div className="m-3">
<label htmlFor="yourName" className="form-label">Your Name</label>
  <input type="text" className="form-control" id="yourName" placeholder="John Smith"/>
  <label htmlFor="yourEmail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="yourEmail" placeholder="name@example.com"/>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="yourMessage" rows="3"></textarea>
  <button id="form-button">submit</button>
  <Link to="contact" role="button" className="btn">
  <i className="fa-solid fa-eye-slash fa-2x"></i>
      </Link>
</div>
    </>
}


export default contactForm;