import React, {useState} from 'react';
import ProjectComponent from '../ProjectCard';
import myprojects from './projects.json'

function ProjectPage(){
    const [projects] = useState(myprojects);
    function imagePath(props) {
        const image = require(`./images/${props.image}`)
        return image
        }
    return (
        <section>
          <article id='projecCardContainer'>
          { projects.map( p => <ProjectComponent
          name={p.name}
          image={imagePath(p)} 
          description={p.description} 
          link={p.link}
          repoLink={p.repoLink}
          id={p.id}
          />) }
          </article>
        </section>
    );
}


export default ProjectPage;