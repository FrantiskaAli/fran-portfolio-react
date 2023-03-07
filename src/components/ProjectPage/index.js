import React, {useState} from 'react';
import ProjectComponent from '../ProjectCard';
import myProjects from './projects.json';
import {Link, Routes, Route} from 'react-router-dom'

function ProjectPage(){
    const [projects] = useState(myProjects);
    function imagePath(props) {
        const image = require(`./images/${props.image}`)
        return image
        };
function pickProject(p){
return <ProjectComponent
    key={projects[p].id} 
    name={projects[p].name}
    image={imagePath(projects[p])} 
    description={projects[p].description} 
    link={projects[p].link}
    repoLink={projects[p].repoLink}
    id={projects[p].id}
    /> 
}
    return (
        <section>
               <article class=".slideInDown">
      <Routes>
        <Route path="1" element={pickProject(0)} />
        <Route path="2" element={pickProject(1) } />
        <Route path="3" element={pickProject(2)}/>
        <Route path="4" element={pickProject(3)}/>
        <Route path="5" element={pickProject(4)} />
        <Route path="6" element={pickProject(5)} />
      </Routes>

        
        </article>
        <article id='projectCardContainer' className="row justify-content-center container-btns">
     <Link to="1" role="button" className="btnF col-lg-3 col-md-2 col-sm-4 m-2">{projects[0].name}
      </Link>
      <Link to="2" role="button" className="btnF col-lg-3 col-md-2 col-sm-4 m-2">{projects[1].name}
      </Link>
      <Link to="3" role="button" className="btnF col-lg-3 col-md-2 col-sm-4 m-2">{projects[2].name}
      </Link>
      <Link to="4" role="button" className="btnF col-lg-3 col-md-2 col-sm-4 m-2">{projects[3].name}
      </Link>
      <Link to="5" role="button" className="btnF col-lg-3 col-md-2 col-sm-4 m-2">{projects[4].name}
      </Link>
      <Link to="6" role="button" className="btnF col-lg-3 col-md-2 col-sm-4 m-2">{projects[5].name}
      </Link> 
        </article>
     
        </section>
    );
}


export default ProjectPage;