import React from 'react';
import Form from '../ContactForm';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/js/all.js';

import { Link, Route, Routes } from 'react-router-dom';


function ContactPage(){

    return <>
    <section className="d-flex justify-content-around m-5 contact-btns">
    <a className='btnF' href="google.com" rel="noreferrer" target="_blank"><i className="fa fa-file fa-3x"></i>CV</a>
    <a className='btnF' href="https://github.com/FrantiskaAli" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-3x"></i></a>
    <a className='btnF' href="https://www.linkedin.com/in/frantiska-rechkova-94623925b/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
    <Link to="form" role="button" className="btnF"><i className="fa-regular fa-envelope fa-3x"></i>
      </Link>
      </section>
      <section>
      <Routes>
        <Route path="form" element={<Form />} />
      </Routes>
      </section>
   
    </>
}


export default ContactPage;