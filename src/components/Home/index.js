import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js'
import {Link} from 'react-router-dom'

function Home(){
  const handleClick = event => {
    event.currentTarget.classList.toggle('isFlipped');
  };
  const profilePic = require('./images/profilepic.jpg');
  return (
        <section className="about d-flex flex-column" id="about">
     
        <div id="me-card" onClick={handleClick} >
        
        <article className="cardFace cardFront">
          <div id="bio" className="d-flex flex-column align-items-center" >
        <span id="turn"><i  className="fa-solid fa-rotate fa-2x"></i></span>
          <h1>Hi! I am Fran <i className="fa-solid fa-laptop-code"></i></h1>
          <h3>full-stack developer in making!</h3>
          <p id='intro'>
            I am very <strong>hard-working</strong> result driven individual with passion for <strong>person-centred creative design </strong>and great attention to detail.
            I graduated front-end developmnet bootcamp and keep on finding projects to <strong>improve my skill set</strong> as much as possible.
            The main languages in my tech stack are <strong>JavaScript(includes React)</strong>, and of course <strong>HTML/CSS</strong>.However I’m a lifelong learner and getting ready to take PHP and SQL course to understand all about web-dev.
            Along with all this <strong>enthusiasm for web developement</strong> I am also mother of two beautiful girls so no time for other hobbies at the moment.<i className="fa-regular fa-face-laugh-wink fa-1x"></i>
          </p>
          <Link to="/projects" role="button" className="btnF m-5" id="toProjects">
            See My Work  <i className="fa-solid fa-laptop-file"></i>
         </Link>
         </div>
        </article>
        <article id="me" className="cardFace cardBack">
        <img src={profilePic} alt="..." width='50%' height='100%'/>
        
       
        </article>
        </div>

        </section>
    )
}


export default Home;