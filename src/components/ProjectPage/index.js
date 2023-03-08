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
const clickScroll = () => {
  window.scrollTo(0,0);
}
    return (
        <section>
               <article className=".slideInDown">
      <Routes>
        <Route path="1" element={pickProject(0)} />
        <Route path="2" element={pickProject(1) } />
        <Route path="3" element={pickProject(2)}/>
        <Route path="4" element={pickProject(3)}/>
        <Route path="5" element={pickProject(4)} />
        <Route path="6" element={pickProject(5)} />
      </Routes>

        </article>
        <article id='projectCardContainer' className="d-flex justify-content-around container-fluid my-3 text-center flex-wrap container-btns">
        { projects.map( p => <Link
        to={p.id}
        role='button'
        key={p.id}
        onClick={clickScroll}
        className="btnF  p-2 col-lg-3 col-md-2 col-sm-4 m-2"
    
        >{p.name} 
       
        </Link>
        ) }

        </article>
     
        </section>
    );
}


export default ProjectPage;