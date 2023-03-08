import React from 'react';
import Form from '../ContactForm';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/js/all.js';
import Resume from './CV/Resume.pdf'
import { Link, Route, Routes } from 'react-router-dom';


function ContactPage(){

    return <>
    <section className="d-flex justify-content-around container-fluid my-3 text-center container-btns flex-wrap">
    <a className='btnF col-lg-1 col-md-1 col-sm-4 mx-4 my-2 p-2' id='cv' href={Resume} rel="noreferrer" download><i className="fa fa-file fa-3x"></i>CV</a>
    <a className='btnF col-lg-1 col-md-1 col-sm-4 mx-4 my-2 p-2' id='gh' href="https://github.com/FrantiskaAli" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-3x"></i></a>
    <a className='btnF col-lg-1 col-md-1 col-sm-4 mx-4 my-2 p-2' id='ln' href="https://www.linkedin.com/in/frantiska-rechkova-94623925b/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin fa-3x"></i></a>
    <Link to="form" role="button" id='msg' className="btnF col-lg-1 col-md-1 col-sm-4 mx-4 my-2 p-2"><i className="fa-regular fa-envelope fa-3x"></i>
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