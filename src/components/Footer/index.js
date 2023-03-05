import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer className='container-fluid d-flex justify-content-end p-2'>
        <p className='footer-text mx-2'><i class="fa-regular fa-copyright"></i> FranALi</p>
<Link to="contact" role="button" className="footer-link mx-2"><i className="fa-regular fa-face-smile-beam"></i> Get in touch
      </Link>
      </footer>
    )
  }
  
  export default Footer;
  