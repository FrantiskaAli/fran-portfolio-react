import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js'

function Home(){
  const handleClick = event => {
    event.currentTarget.classList.toggle('isFlipped');
  };
  const profilePic = require('./images/profilepic.jpg');
  return (
        <section className="about d-flex flex-column" id="about">
     
        <div id="me-card" onClick={handleClick} >
        
        <article id="bio" className="cardFace cardFront">
    
        <span id="turn"><i  className="fa-solid fa-rotate fa-2x"></i></span>
          <h1>Hi! I am Fran <i className="fa-solid fa-laptop-code"></i></h1>
          <h3>front-end developer in making!</h3>
          <p id='intro'>
            I am very hard-working result driven individual with passion for person-centred creative design and great attention to detail.
            I graduated front-end developmnet bootcamp and keep on finding projects to improve my skill set as much as possible.
            The main languages in my tech stack are JavaScript(includes React), and of course HTML/CSS. I’m a lifelong learner (about to take course of SQL).
            Along with all this enthusiasm for web dev I am also mother of two beautiful girls so no time for other hobbies at the moment.<i className="fa-regular fa-face-laugh-wink fa-1x"></i>
          </p>
        </article>
        <article id="me" className="cardFace cardBack">
        <img src={profilePic} alt="..." width='50%' height='100%'/>
        
       
        </article>
        </div>

        </section>
    )
}


export default Home;