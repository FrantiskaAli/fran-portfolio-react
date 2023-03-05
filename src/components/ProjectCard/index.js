import React from 'react';


function ProjectCard({name, image, description, link, repoLink,id}){
    return <>
    
    <article className="project" id={id} >
    <figure>
      <img src={image} className="project-pic" alt={name}/>
    </figure>
    <div >
      <div className="card-body" >
        <h5>{name}</h5>
        <p className="card-text m-3">{description}</p>
        <div className="card-body">
          <div className='my-buttons d-flex justify-content-center'>
    <a href={link} id="project-link">See my app</a>
    <a href={repoLink} id="repo-link">See my repo</a>
    </div>
  </div>
      </div>
    </div>
</article>

    </>
}


export default ProjectCard;