import React from 'react';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/js/all.js';

import { Link } from 'react-router-dom';


function Welcome() {

  return (

    <section className="wrapper">

      <div> <i className="fa-brands fa-js  fa-5x  "></i></div>
      <div> <i className="fa-brands fa-bootstrap  fa-5x  "></i></div>
      <div> <i className="fa-brands fa-react  fa-5x  "></i></div>
      <div> <i className="fa-brands fa-html5  fa-5x  "></i></div>
      <div> <i className="fa-solid fa-laptop-code fa-5x"></i></div>
      <div> <i className="fa-brands fa-css3-alt  fa-5x  "></i></div>
      <div> <i className="fa-brands fa-node  fa-5x  "></i></div>
      <div> <i className="fa-solid fa-laptop-code fa-5x"></i></div>
      <div> <i className="fa-brands fa-js  fa-5x  "></i></div>
      <div> <i className="fa-brands fa-bootstrap  fa-5x  "></i></div>
      <div> <i className="fa-brands fa-react  fa-5x  "></i></div>
      <div> <i className="fa-brands fa-css3-alt  fa-5x  "></i></div>
      <article id="welcome-flex">
        <h1 id="welcome">Welcome friend</h1>
        <Link to="about" role="button" id='w-link'><h2 id="welcome-btn">Look around!</h2>
        </Link>
      </article>
    </section>

  )
}


export default Welcome;